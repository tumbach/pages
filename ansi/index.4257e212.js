document.querySelectorAll(".js").forEach(e=>e.style.display="initial");const e=document.querySelector("audio")||new Audio;let t,n,a,i,o,c,d,r,l=document.getElementById("trigger"),u=document.getElementById("logo");function s(l){if(e.muted&&(e.muted=!1),e.paused?e.play():e.pause(),void 0===c){try{window.AudioContext=window.AudioContext||window.webkitAudioContext,n=new AudioContext}catch(e){return!1}t=n.createMediaElementSource(e),a=n.createAnalyser(),i=n.createGain(),a.minDecibels=-64,a.maxDecibels=-32,a.fftSize=512,o=new Uint8Array(d=a.frequencyBinCount),r=Math.floor(.5*d),t.connect(a),a.connect(i),i.connect(n.destination),function e(){a.getByteFrequencyData(o);let t=o[3]-c,n=o[3]/255;y<n?y=n+t/255:y>0&&(y-=.005),u.style.opacity=y,function(e,t){let n;canvasCtx.clearRect(0,0,w,m);let a=Math.ceil(w/r),i=0;for(let e=0;e<r;e++)n=m*o[e]/255,canvasCtx.fillStyle=barGradient,canvasCtx.fillRect(i,m-n,a,n),i+=a+1;canvasCtx.fillStyle="red",canvasCtx.fillRect((a+1)*3,m*(1-t),a,5)}(0,y),c=o[3],requestAnimationFrame(e)}()}i.gain.value=l?0:1}window.requestAnimationFrame=window.requestAnimationFrame||function(e){window.setTimeout(e,1e3/30)},l.addEventListener("click",()=>s(0)),l.addEventListener("touchstart",()=>s(0));let w=window.innerWidth,m=window.innerHeight;(canvas=document.getElementById("yaebal")).width=w,canvas.height=m,(barGradient=(canvasCtx=canvas.getContext("2d")).createLinearGradient(0,0,0,m)).addColorStop(0,"#24c6fb"),barGradient.addColorStop(1,"#2CC932");let y=0;
//# sourceMappingURL=index.4257e212.js.map