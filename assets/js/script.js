'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Cherish In The Dark",
    album: "CG5",
    artist: "YouTube",
    musicPath: "./assets/music/music-1.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-2.jpg",
    posterUrl: "./assets/images/poster-2.jpg",
    title: "Don't Look Back In Anger",
    album: "Oasis",
    artist: "YouTube",
    musicPath: "./assets/music/music-2.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-3.jpg",
    posterUrl: "./assets/images/poster-3.jpg",
    title: "Sleep Well",
    album: "CG5",
    artist: "YouTube",
    musicPath: "./assets/music/music-3.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-4.jpg",
    posterUrl: "./assets/images/poster-4.jpg",
    title: "Theme of Rocky Ridge",
    album: "SEGA Sound Team",
    artist: "YouTube",
    musicPath: "./assets/music/music-4.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-5.jpg",
    posterUrl: "./assets/images/poster-5.jpg",
    title: "Headlock",
    album: "Imogen Heap",
    artist: "YouTube",
    musicPath: "./assets/music/music-5.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Blissful",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Jhove",
    musicPath: "./assets/music/music-6.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-7.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-8.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-9.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-10.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-11.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-12.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-13.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-14.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-15.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-16.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-17.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-18.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-19.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-20.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-21.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-22.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-23.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-24.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-25.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-26.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-27.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-28.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/music-29.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "Rats, we're rats; we're the rats.",
    album: "JG Wentworthh",
    artist: "YouTube",
    musicPath: "./assets/music/music-30.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "F33L1NG SPRUNK111",
    album: "PennyThePanc",
    artist: "SoundCloud",
    musicPath: "./assets/music/music-31.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "strange beats to rock out to: AN ADDICTING JAPANESE ROCK PLAYLIST TO BOOST YOUR SEROTONIN",
    album: "me, monster, and loop",
    artist: "YouTube",
    musicPath: "./assets/music/music-32.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-default.jpg",
    posterUrl: "./assets/images/poster-default.jpg",
    title: "34ºN, 12ºE (Mad Space) - Sonic Adventure 2",
    album: "DeoxysPrime",
    artist: "YouTube",
    musicPath: "./assets/music/music-33.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-34.jpg",
    posterUrl: "./assets/images/poster-34.jpg",
    title: "Tower Defense Simulator OST - Nuclear Fallen King",
    album: "Phoqus",
    artist: "YouTube",
    musicPath: "./assets/music/music-34.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-35.jpg",
    posterUrl: "./assets/images/poster-35.jpg",
    title: "Tower Defense Simulator OST - Going Nuclear! (Nuclear Monster Theme)",
    album: "Paradoxum Games",
    artist: "YouTube",
    musicPath: "./assets/music/music-35.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-36.jpg",
    posterUrl: "./assets/images/poster-36.jpg",
    title: "ABSTRACTION (ft. Michael Kovach & Caleb Hyles)",
    album: "KittenSneeze",
    artist: "YouTube",
    musicPath: "./assets/music/music-36.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-37.jpg",
    posterUrl: "./assets/images/poster-37.jpg",
    title: "SEE YOU AGAIN (ft. Kali Uchis)",
    album: "Tyler, The Creator",
    artist: "YouTube",
    musicPath: "./assets/music/music-37.mp3",
  },
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">play_arrow</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

// Add an event listener for when the audio ends
// New code from ChatGPT
audioSource.addEventListener("ended", () => {
  skipNext();
});
// End of new code


const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

// Comment out old code
// const shuffleMusic = () => currentMusic = getRandomMusic();

// New code from ChatGPT
// Array to track played songs in shuffle mode
let playedSongs = [];

const shuffleMusic = () => {
  // If all songs have been played, reset the playedSongs array
  if (playedSongs.length === musicData.length) {
    playedSongs = [];
  }

  // Generate a random music index that hasn't been played yet
  let randomIndex;
  do {
    randomIndex = getRandomMusic();
  } while (playedSongs.includes(randomIndex));

  playedSongs.push(randomIndex); // Add the selected song to the played list
  currentMusic = randomIndex; // Update currentMusic to the new shuffled song
};
// End of new code

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

/* Comment out old code
  const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);
*/

//New code from ChatGPT
// Shuffle toggle logic with reset for playedSongs
const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;

  if (!isShuffled) {
    playedSongs = []; // Reset playedSongs when shuffle is turned off
  }
};

playerShuffleBtn.addEventListener("click", shuffle);
// End of new code



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);