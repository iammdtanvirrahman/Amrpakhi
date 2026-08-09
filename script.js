const revealBtn = document.getElementById('revealBtn');
const panel = document.getElementById('messagePanel');
const typedText = document.getElementById('typedText');

const message = `
তুমি জানো, পৃথিবীতে অসংখ্য মানুষ আছে,
কিন্তু আমার চিন্তার শেষ প্রান্তে প্রতিদিন একই মানুষটাকেই খুঁজে পাই — তোমাকে।

তোমার উপস্থিতি কোনো শব্দ নয়,
এটা একটা অনুভূতি।

যখন রাত গভীর হয় আর চারপাশ শান্ত হয়ে যায়,
তখনও মনে হয় তুমি আমার পাশে আছো।

এই ওয়েবসাইটটা শুধু কোড দিয়ে বানানো না,
এটা বানানো হয়েছে অপেক্ষা, ভালোবাসা আর তোমাকে হারাতে না চাওয়ার অনুভূতি দিয়ে।

— তোমার তানভীর 💙
`.trim();

let isTyping = false;

revealBtn.addEventListener('click', () => {
  panel.classList.remove('hidden');

  if (isTyping) return;

  isTyping = true;
  typedText.textContent = '';

  let index = 0;

  function type() {
    if (index < message.length) {
      typedText.textContent += message.charAt(index);
      index++;
      setTimeout(type, 26);
    }
  }

  type();

  panel.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
