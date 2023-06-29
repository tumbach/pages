import Visualizer from './visualizer.js';
window.Veeze = new Visualizer();

const button = document.getElementById("trigger");
button.addEventListener("click", () => Veeze.play(0));
button.addEventListener("touchstart", () => Veeze.play(0));

document.querySelectorAll(".js").forEach(item => item.style.display = "initial");
