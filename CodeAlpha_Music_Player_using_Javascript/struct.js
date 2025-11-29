const songs = [
    {title: "Dreams", artist: "Joakim Karud", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
    {title: "Summer", artist: "Marconi Union", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},
    {title: "Relax", artist: "Bensound", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"}
];
let currentSongIndex = 0;
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volume = document.getElementById('volume');
const playlistEl = document.getElementById('playlist');
const autoplayEl = document.getElementById('autoplay');

loadSong(currentSongIndex);

songs.forEach((song,index)=>{
    const li = document.createElement('li');
    li.textContent = `${song.title} - ${song.artist}`;
    li.addEventListener('click',()=>{
        currentSongIndex = index;
        loadSong(currentSongIndex);
        playSong();
    });
    playlistEl.appendChild(li);
});

function loadSong(index){
    const song = songs[index];
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
}

function playSong(){
    audio.play();
    playBtn.innerHTML='<span>&#10074;&#10074;</span>';
}

function pauseSong(){
    audio.pause();
    playBtn.innerHTML='<span>&#9658;</span>';
}

playBtn.addEventListener('click',()=>{
    if(audio.paused){playSong()}else{pauseSong()}
});

prevBtn.addEventListener('click',()=>{
    currentSongIndex=(currentSongIndex-1+songs.length)%songs.length;
    loadSong(currentSongIndex);
    playSong();
});

nextBtn.addEventListener('click',()=>{
    currentSongIndex=(currentSongIndex+1)%songs.length;
    loadSong(currentSongIndex);
    playSong();
});

audio.addEventListener('timeupdate',()=>{
    const progressPercent=(audio.currentTime/audio.duration)*100;
    progress.value=progressPercent||0;
    const curMin=Math.floor(audio.currentTime/60);
    const curSec=Math.floor(audio.currentTime%60).toString().padStart(2,'0');
    const durMin=Math.floor(audio.duration/60)||0;
    const durSec=Math.floor(audio.duration%60).toString().padStart(2,'0');
    currentTimeEl.textContent=`${curMin}:${curSec}`;
    durationEl.textContent=`${durMin}:${durSec}`;
});

progress.addEventListener('input',()=>{audio.currentTime=(progress.value/100)*audio.duration});
volume.addEventListener('input',()=>{audio.volume=volume.value});
audio.addEventListener('ended',()=>{if(autoplayEl.checked){nextBtn.click()}else{pauseSong()}});