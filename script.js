// ⭐ Generate Stars
const stars = document.getElementById('stars');

for (let i = 0; i < 220; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDuration = (Math.random() * 3 + 2) + 's';
  stars.appendChild(star);
}

// 📝 Floating text on photo
const floatingText = document.getElementById('floatingText');

const photoMessages = [
  'তুমি আমার জীবনের সবচেয়ে সুন্দর অনুভূতি।',
  'চাঁদটা সুন্দর, কিন্তু তোমার হাসি আরও উজ্জ্বল।',
  'তুমি থাকলে নীরবতাও গান হয়ে যায়।',
  'আমার প্রতিটা রাত তোমার নামেই জ্বলে ওঠে।'
];

let photoIndex = 0;

setInterval(() => {
  floatingText.style.opacity = '0';

  setTimeout(() => {
    photoIndex = (photoIndex + 1) % photoMessages.length;
    floatingText.textContent = photoMessages[photoIndex];
    floatingText.style.opacity = '1';
  }, 400);
}, 5000);

// 💙 Reveal panel with typing effect
const revealBtn = document.getElementById('revealBtn');
const panel = document.getElementById('messagePanel');
const typedText = document.getElementById('typedText');

const secretMessage = `
সামিরা,

এই মহাবিশ্বে অসংখ্য তারা আছে,
কিন্তু আমার আকাশে সবচেয়ে উজ্জ্বল আলোটা শুধু তুমি।

যখন পৃথিবী ঘুরে, চাঁদ ওঠে, সূর্য আলো ছড়ায়,
তখনও আমার মনে হয় সবকিছু যেন তোমাকে ঘিরেই চলছে।

এই ছোট্ট ডিজিটাল মহাবিশ্বটা আমি তোমার জন্যই তৈরি করেছি।

— তোমার তানভীর ✨
`.trim();

let started = false;

revealBtn.addEventListener('click', () => {
  panel.classList.remove('hidden');

  if (started) return;
  started = true;

  let i = 0;

  function type() {
    if (i < secretMessage.length) {
      typedText.textContent += secretMessage.charAt(i);
      i++;
      setTimeout(type, 28);
    }
  }

  type();

  panel.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
