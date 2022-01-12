const music = document.querySelector(".music");
const title = document.querySelector(".title");
const artist = document.querySelector(".artist");
const play = document.querySelector(".play");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const cover = document.querySelector(".cover img");
let current = 1;
let musicState = true;

const musicTitle = ["often", "mask off", "blinding lights"];

const musicArtist = ["the weeknd", "future", "the weeknd"];

const musicSrc = [
  "https://p.scdn.co/mp3-preview/213e24045459a93b123ee4ef3c4762f8faaad1ce?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
  "https://p.scdn.co/mp3-preview/0519fc7c44d418ca6c721d9aa83e9597065288e1?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
  "https://p.scdn.co/mp3-preview/2f860d8f53b4f34dbef1053890845a8a162fba82?cid=162b7dc01f3a4a2ca32ed3cec83d1e02",
];

const musicCover = [
  "https://i.scdn.co/image/ab67616d0000b2737fcead687e99583072cc217b",
  "https://i.scdn.co/image/ab67616d0000b273e0b64c8be3c4e804abcb2696",
  "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
];

const musicList = [musicTitle, musicArtist, musicSrc, musicCover];

const playMusic = () => {
  music.play();
  cover.classList.add("rotate");
  play.src = "icons/pause-d.png";
  musicState = false;
};

const pauseMusic = () => {
  music.pause();
  cover.classList.remove("rotate");
  play.src = "icons/play-d.png";
  musicState = true;
};

play.addEventListener("click", () => {
  if (musicState) {
    playMusic();
  } else {
    pauseMusic();
  }
});

function nextFunc() {
  title.textContent = musicList[0][current + 1];
  artist.textContent = musicList[1][current + 1];
  music.src = musicList[2][current + 1];
  cover.src = musicList[3][current + 1];
  playMusic();
  current++
}

function prevFunc() {
  title.textContent = musicList[0][current - 1];
  artist.textContent = musicList[1][current - 1];
  music.src = musicList[2][current - 1];
  cover.src = musicList[3][current - 1];
  playMusic();
  current = current-1
}

next.addEventListener("click", () => {
  if (current > 1) {
    current = -1;
    nextFunc()
  } else {
    nextFunc()
  }
});

prev.addEventListener("click", () => {
  if (current === 0) {
    current = 3;
    prevFunc()
  } else {
    prevFunc()
  }
});

