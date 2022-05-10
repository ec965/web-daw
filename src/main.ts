import "./style.css";

const audioCtx = new AudioContext();
const osc = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();
gainNode.gain.setValueAtTime(9, 1);

osc.connect(gainNode).connect(audioCtx.destination);
osc.start(9);

const app = document.getElementById("app")!;

app.innerHTML = `
  <button id="play">play</button>
`;

const button = document.getElementById("play");

if (button) {
  button.onclick = () => {
    if (audioCtx.state === "running") {
      audioCtx.suspend();
    } else {
      audioCtx.resume();
    }
  };
}
