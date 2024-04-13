const audioEl = document.getElementById("audio");
const play = document.getElementById("play");
const prev=document.getElementById("prev")
const next=document.getElementById("next")
const img=document.querySelector('img')
const songName=document.getElementById('song')
const artist=document.getElementById('artist')
const progressContainer=document.querySelector('.progress-container')
const progressBar=document.getElementById('progress')

const songs=[
    {
        name:"music-1",
        displayName:"Stars in the Sky",
        artist:"BEKSY"
    },
    {
        name:"music-2",
        displayName:"On & On",
        artist:"Cartoon, Daniel Levi, Jéja"
    },
    {
        name:"music-3",
        displayName:"Romeo and Juliet",
        artist:"SadBois, Manno"
    },
    {
        name:"music-4",
        displayName:"Cradles",
        artist:"Sub Urban"
    }
]

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

let songIndex=0
function nextSong(){
    songIndex++
    if (songIndex > songs.length -1){
        songIndex=0
    }
    loadSong(songs[songIndex])
    playSong()
}

function prevSong(){
    songIndex--
    if (songIndex < 0){
        songIndex=songs.length -1
    }
    loadSong(songs[songIndex])
    playSong()
}

play.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});


function loadSong(song){
    img.src=`img/${song.name}.jpg`
    audioEl.src=`music/${song.name}.mp3`
    songName.textContent=song.displayName
    artist.textContent=song.artist
}

loadSong(songs[songIndex])

function updateProgressBar(e){
    const {duration,currentTime}=e.srcElement
    let progressPercentage=(currentTime/duration)*100
    progressBar.style.width=`${progressPercentage}%`
}

next.addEventListener('click',nextSong)
prev.addEventListener('click',prevSong)
audioEl.addEventListener('timeupdate',updateProgressBar)