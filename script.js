// ⭐ Generate Stars
const starsContainer = document.getElementById('stars');

for (let i = 0; i < 320; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDuration = (Math.random() * 4 + 2) + 's';
  starsContainer.appendChild(star);
}

// 📸 Your 6 Photos
const photos = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg'
];

// 🎵 Your Lyrics
const lyrics = [
  `এ যেন সহজ স্বীকারোক্তি
আমি যুগান্তরী নই`,

  `এ যেন ভীষণ আক্ষেপ আমার
আমি দিগ্বিজয়ী নই`,

  `শুধু একটাই আশা আমি বুকে জড়িয়ে
রবো সারাটি জীবন তোমায় নিয়ে`,

  `কোনো এক নিঃসঙ্গ রোদেলা রাতে দেখেছি
প্রিয়তমা তোমার চোখে মিষ্টি হাসি`,

  `কোনো এক দুঃসহ জোছনা দিনে
বাতি নিভে গেলে
কড়া নেড়েছি তোমার হাতের ঘরে`,

  `বিন্দু আমি, তুমি আমায় ঘিরে
বৃত্তের ভেতর শুধু তুমি আছো

মাতাল আমি তোমার প্রেমে
তাই অর্থহীন সবই যে প্রেম লাগে 💙`
];

const imageEl = document.getElementById('slideImage');
const lyricEl = document.getElementById('lyricText');
const counterEl = document.getElementById('counter');
const progressBar = document.getElementById('progressBar');

let index = 0;

function updateCounter() {
  counterEl.textContent = `${String(index + 1).padStart(2, '0')} / 06`;
}

function nextSlide() {
  imageEl.style.opacity = '0';
  lyricEl.style.opacity = '0';

  setTimeout(() => {
    index = (index + 1) % photos.length;

    imageEl.src = photos[index];
    lyricEl.textContent = lyrics[index];

    // slow cinematic zoom
    imageEl.style.transform = 'scale(1.08)';

    requestAnimationFrame(() => {
      imageEl.style.opacity = '1';
      lyricEl.style.opacity = '1';
      imageEl.style.transform = 'scale(1)';
    });

    updateCounter();

    // restart progress animation
    progressBar.style.animation = 'none';
    void progressBar.offsetWidth;
    progressBar.style.animation = 'progressAnim 7s linear infinite';

  }, 900);
}

updateCounter();
lyricEl.textContent = lyrics[0];

// ⏱️ Change every 7 seconds
setInterval(nextSlide, 7000);

// 🎵 Optional Music Button
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');

let playing = false;

musicBtn.addEventListener('click', async () => {
  try {
    if (!playing) {
      await bgMusic.play();
      musicBtn.textContent = '⏸️';
      playing = true;
    } else {
      bgMusic.pause();
      musicBtn.textContent = '🎵';
      playing = false;
    }
  } catch (err) {
    console.log('Music file not found yet');
  }
});
