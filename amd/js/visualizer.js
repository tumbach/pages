import tinygradient from 'npm:tinygradient';

class Visualizer {

  #isInited = false;
  #timestamp = performance.now();

  constructor({ audio, canvas } = {}) {
    this.audioElement = audio ?? document.querySelector("audio");
    this.canvasElement = canvas ?? document.getElementById("yaebal");

    this.drawingType = "Linear"; // or "Log";
    this.secondsToShow = 10;
    this.stepsPerSecond = 24;
    this.fftSize = 1024;
    this.gradientOptions = [
      {color: '#000', pos: 0},
      {color: '#006', pos: 0.1},
      {color: '#f0f', pos: 1}
    ]

    this.gradientValues = Visualizer.calculateGradient(this.gradientOptions);
    this.canvas = Visualizer.initCanvas(this.canvasElement);
    this.bufferCanvas = Visualizer.initCanvas(document.createElement("canvas"));

    this.canvasContext = this.canvas.getContext("2d");
    this.bufferCanvasContext = this.bufferCanvas.getContext("2d");

    // `stepHeight` compensates losses of FPS
    this.stepHeight = Math.ceil(this.canvas.height / this.secondsToShow / this.stepsPerSecond);
  }

  static calculateGradient(gradientOptions) {
    const gradient = tinygradient(...gradientOptions);
    const gradientValues = [];
    const byteLength = 256;
    for (let i = 0; i < byteLength; i++) {
      gradientValues[i] = gradient.rgbAt(i / byteLength);
    }
    return gradientValues;
  }

  static initCanvas(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return canvas;
  }

  initSong() {
    if (this.#isInited) {
      return true;
    }
    let
      context,
      source;
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      context = new AudioContext();
    } catch (e) {
      return false;
    }
    source = context.createMediaElementSource(this.audioElement);
    this.analyser = context.createAnalyser();
    this.gainNode = context.createGain();

    this.analyser.minDecibels = -84;
    this.analyser.maxDecibels = -36;
    //this.analyser.smoothingTimeConstant = 0.75;
    this.analyser.fftSize = this.fftSize;

    let bufferLength = Math.ceil(this.analyser.frequencyBinCount / 1.073); // cut upper frequencies
    this.dataArray = new Uint8Array(bufferLength);

    source.connect(this.analyser);
    this.analyser.connect(this.gainNode);
    this.gainNode.connect(context.destination);

    if (this.drawingType.toLocaleLowerCase() === "linear") {
      this.barWidth = Math.ceil(this.canvas.width / this.dataArray.length);
    }

    this.#isInited = true;
    this.draw();
    return true;
  }

  resetSong() {
    return (this.audioElement.paused)
      ? this.audioElement.play()
      : this.audioElement.pause();
  }

  play(shouldBeMuted) {
    this.audioElement.muted = false; // mute should be via gainNode
    this.resetSong(this.audioElement);
    this.initSong();
    this.gainNode.gain.value = shouldBeMuted ? 0 : 1;
    return true;
  }

  draw() {
    this.analyser.getByteFrequencyData(this.dataArray);
    this.drawCanvas(this.dataArray);
    this.requestAnimationFrame(() => this.draw());
  }

  requestAnimationFrame(callback) {
    const now = performance.now();
    const ms = now - this.#timestamp;
    this.#timestamp = now;
    this.stepHeight = Math.ceil(this.canvas.height / this.secondsToShow / 1000 * ms);
    setTimeout(callback, this.stepsPerSecond);
  }

  drawCanvas(dataArray) {
    this.bufferCanvasContext.drawImage(this.canvas, 0, 0);
    this.canvasContext.fillStyle = this.gradientValues[0];
    this.canvasContext.fillRect(0, 0, this.canvas.width, this.stepHeight);
    this.canvasContext.drawImage(this.bufferCanvas, 0, this.stepHeight);

    return this["drawCanvas" + this.drawingType](dataArray);
  }

  drawCanvasLinear(dataArray) {
    for (let i = 0; i < dataArray.length; i++) {
      if (!dataArray[i]) {
        continue;
      }
      this.canvasContext.fillStyle = this.gradientValues[dataArray[i]];
      this.canvasContext.fillRect(i * this.barWidth, 0, this.barWidth, this.stepHeight);
    }
  }

  drawCanvasLog(dataArray) {
    let x = 0;
    let stepWidth = 0;

    for (let i = 0; i < dataArray.length; i++) {
      if (!dataArray[i]) {
        continue;
      }
      this.canvasContext.fillStyle = this.gradientValues[dataArray[i]];
      stepWidth = Math.ceil((Math.log(i+1) / Math.log(dataArray.length) * this.canvas.width) - x);
      this.canvasContext.fillRect(x, 0, stepWidth, this.stepHeight);
      x += stepWidth;
    }
  }

}

export default Visualizer;
