document.querySelectorAll(".js").forEach(item => item.style.display = "initial");

const audio = document.querySelector("audio") || new Audio();
let source, context, analyser, gainNode,
  dataArray, dataOld, bufferLength, blhalf,
  button = document.getElementById("trigger"),
  container = document.getElementById("logo");
let barItem = 3;

window.requestAnimationFrame = (function(){
  return window.requestAnimationFrame ||
    function(callback){
      window.setTimeout(callback, 1000 / 30);
    };
})();
function resetSong(audio) {
  (audio.paused) ? audio.play() : audio.pause();
}
button.addEventListener("click", () => play(0));
button.addEventListener("touchstart", () => play(0));
function play(mute) {
  if (audio.muted) {
    audio.muted = false;
  }
  resetSong(audio);
  if (typeof dataOld === "undefined") { // means `inited`
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      context = new AudioContext();
    } catch (e) {
      return false;
    }
    source = context.createMediaElementSource(audio);
    analyser = context.createAnalyser();
    gainNode = context.createGain();

    analyser.minDecibels = -64;
    analyser.maxDecibels = -32;
    analyser.fftSize = 512;

    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
    blhalf = Math.floor(bufferLength * 0.5);

    source.connect(analyser);
    analyser.connect(gainNode);
    gainNode.connect(context.destination);
    draw();
  }
  gainNode.gain.value = mute ? 0 : 1;
}

let WIDTH  = window.innerWidth;
let HEIGHT = window.innerHeight;
canvas = document.getElementById('yaebal');
canvas.width = WIDTH; canvas.height = HEIGHT;
canvasCtx = canvas.getContext('2d');
let color = { 'from' : '#24c6fb', 'to' : '#2CC932'};
barGradient = canvasCtx.createLinearGradient(0,0,0,HEIGHT);
barGradient.addColorStop(0, color.from);
barGradient.addColorStop(1, color.to);
let drumVolume = 0;

function draw() {
  analyser.getByteFrequencyData(dataArray);
  let delta = dataArray[barItem] - dataOld;
  let currentVolume = dataArray[barItem] / 255;
  if (drumVolume < currentVolume) {
    drumVolume = currentVolume + (delta / 255);
  } else if (drumVolume > 0) {
    drumVolume -= 0.005;
  }
  container.style.opacity = drumVolume;
  drawCanvas(delta, drumVolume);
  dataOld = dataArray[barItem];
  requestAnimationFrame(draw);
}

function drawCanvas(delta, drumVolume) {
  canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

  let barWidth = Math.ceil(WIDTH / blhalf);
  let barHeight;
  let x = 0;

  for (let i = 0; i < blhalf; i++) {
    barHeight = ((HEIGHT * dataArray[i]) / 255);

    canvasCtx.fillStyle = barGradient;
    canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

    x += barWidth + 1;
  }
  canvasCtx.fillStyle = "red";
  canvasCtx.fillRect((barWidth + 1) * barItem, HEIGHT * (1 - drumVolume), barWidth, 5);
}
