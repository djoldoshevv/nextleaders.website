// Простой слайдер для картинок 2.png, 3.png, ...
const images = [
  'img/2.png',
  'img/3.png',
  'img/4 (1).png',
  'img/5 (1).png',
  'img/6.png',
  'img/7.png',
  'img/8.png',
  'img/9.png',
  'img/13.png',
  'img/14.png',
  'img/15.png'
];

let current = 0;

function showImage(idx) {
  const img = document.getElementById('carousel-image-guide');
  if (img) img.src = images[idx];
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

document.addEventListener('DOMContentLoaded', function() {
  showImage(current);
  const prevBtn = document.getElementById('carousel-prev-guide');
  const nextBtn = document.getElementById('carousel-next-guide');
  if (prevBtn) prevBtn.addEventListener('click', prevImage);
  if (nextBtn) nextBtn.addEventListener('click', nextImage);
});
