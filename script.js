// ⭐ Stars (Kept the same)
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 250; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDuration = (Math.random() * 3 + 2) + 's';
  starsContainer.appendChild(star);
}

// 📸 6 Photos (Updated file names to match your request)
const photos = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg'
];

// 🎵 Your Song Lines
const lyrics = [
  `এ যেন সহজ স্বীকারোক্তি
আমি যুগান্তরী নই`,

  `এ যেন ভীষণ আক্ষেপ আমার
আমি দিগ্বিজয়ী নই`,

  `শুধু একটাই আশা আমি বুকে জড়িয়ে
রবো সারাটি জীবন তোমায় নিয়ে`,

  `কোনো এক নিঃসঙ্গ রোদেলা রাতে দেখেছি
প্রিয়তমা তোমার চোখে মিষ্টি হাসি`,

  `কোনো এক দুঃসহ জোছনা দিনে
বাতি নিভে গেলে
কড়া নেড়েছি তোমার হাতের ঘরে`,

  `বিন্দু আমি, তুমি আমায় ঘিরে
বৃত্তের ভেতর শুধু তুমি আছো

মাতাল আমি তোমার প্রেমে
তাই অর্থহীন সবই যে প্রেম লাগে 💙`
];

// Elements
const imageEl = document.getElementById('slideImage');
const bgBlurEl = document.getElementById('bgBlur');
const lyricEl = document.getElementById('lyricText');

let index = 0;

function nextSlide() {
  // Fade out elements
  imageEl.style.opacity = '0';
  bgBlurEl.style.opacity = '0';
  lyricEl.style.opacity = '0';

  setTimeout(() => {
    // Move to next index
    index = (index + 1) % photos.length;

    // Update contents
    imageEl.src = photos[index];
    bgBlurEl.src = photos[index];
    lyricEl.textContent = lyrics[index];

    // Fade in elements
    imageEl.style.opacity = '1';
    bgBlurEl.style.opacity = '1';
    lyricEl.style.opacity = '1';
  }, 900);
}

// ⏱️ প্রতি 7 সেকেন্ডে স্লাইড চেঞ্জ
setInterval(nextSlide, 7000);

// প্রথম লাইন দেখাও
lyricEl.textContent = lyrics[0];
