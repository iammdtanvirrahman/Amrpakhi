// ⭐ Stars
const starsContainer = document.getElementById('stars');

for (let i = 0; i < 250; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDuration = (Math.random() * 3 + 2) + 's';
  starsContainer.appendChild(star);
}

// 📸 6 Photos
const photos = [
  'photo1.jpg',
  'photo2.jpg',
  'photo3.jpg',
  'photo4.jpg',
  'photo5.jpg',
  'photo6.jpg'
];

// 🎵 Your Song Lines
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

let index = 0;

function nextSlide() {
  imageEl.style.opacity = '0';
  lyricEl.style.opacity = '0';

  setTimeout(() => {
    index = (index + 1) % photos.length;

    imageEl.src = photos[index];
    lyricEl.textContent = lyrics[index];

    imageEl.style.opacity = '1';
    lyricEl.style.opacity = '1';
  }, 900);
}

// ⏱️ প্রতি 7 সেকেন্ডে নতুন ছবি + নতুন লাইন
setInterval(nextSlide, 7000);

// প্রথম লাইন দেখাও
lyricEl.textContent = lyrics[0];
