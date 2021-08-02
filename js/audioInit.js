import {Canvas} from './canvas.js';
import {audio} from './player.js'

function audioInit() {
  //const audio = document.getElementById('audio');
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();  // para administrar y reproducir todos los sonidos y utilizar api web
  let source = audioContext.createMediaElementSource(audio);
  let analyser = audioContext.createAnalyser();
  source.connect(analyser); // con esto conectamos lo que hemos declarado anteriormente
  analyser.connect(audioContext.destination);
  analyser.fftSize = 128;
  let bufferLength = analyser.frequencyBinCount; // obtenemos los datos de frecuencia
  let dataArray = new Uint8Array(bufferLength);

  let canvas = document.getElementById ("canvas");
  let ctx = canvas.getContext ("2d");
  let barWidth = (canvas.width/2) / bufferLength;
  let barHeight;
  let x;

  function animate() {
    x = 0;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    analyser.getByteFrequencyData(dataArray);
    const canva = new Canvas(bufferLength, x, barWidth, barHeight, dataArray);
    canva.drawBars();
    requestAnimationFrame(animate);
  }
  animate()
}

export {
  audioInit
}