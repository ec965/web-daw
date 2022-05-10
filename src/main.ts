import "./style.css";
import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();
synth.triggerAttackRelease("C4", "4n");

const app = document.getElementById("app")!;

app.innerHTML = `
  <button id="play">play</button>
`;

document.getElementById("play")?.addEventListener("click", async () => {
  await Tone.start();
});
