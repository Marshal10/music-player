const audioEl = document.getElementById("audio");
const play = document.getElementById("play");

let isPlaying = false;
function playSong() {
  isPlaying = true;
  play.classList.replace("fa-play","fa-pause")
  play.setAttribute("title","Pause")
  audioEl.play();
}

function pauseSong() {
  isPlaying = false;
  play.classList.replace("fa-pause","fa-play")
  play.setAttribute("title","Play")
  audioEl.pause();
}

play.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});