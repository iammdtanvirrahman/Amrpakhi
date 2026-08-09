// Create Stars
const starsContainer = document.querySelector('.stars');

for (let i = 0; i < 180; i++) {
  const star = document.createElement('div');
  star.className = 'star';

  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDuration = (Math.random() * 2 + 1) + 's';

  starsContainer.appendChild(star);
}

// Typing Effect
const text = "সামিরা, তুমি আমার জীবনের সবচেয়ে সুন্দর অনুভূতি। তোমার হাসি আমার অন্ধকার রাতকে আলোকিত করে দেয়। তুমি আছো বলেই পৃথিবীটা এত সুন্দর লাগে। 💖";

const typingElement = document.getElementById('typing');
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 55);
  }
}

typeWriter();

// Floating Hearts
const loveBtn = document.getElementById('loveBtn');

loveBtn.addEventListener('click', () => {
  for (let i = 0; i < 12; i++) {
    setTimeout(createHeart, i * 120);
  }
});

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.textContent = '💖';

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = '80vh';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}
