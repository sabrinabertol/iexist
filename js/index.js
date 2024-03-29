// Drawing canvas
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#000';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 15;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
// Mobile
if (window.matchMedia('(pointer: none)').matches) {
  canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.clientX, e.clientY];
  });
}
// Desktop
else {
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
}

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  [lastX, lastY] = [e.clientX, e.clientY];
}
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('touchend', () => isDrawing = false);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);






// Slideshow
let slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);
function initSlideShow(slideshow) {
  let slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); 
  let index = 0, time = 5000;
  slides[index].classList.add('active');  
  setInterval( () => {
    slides[index].classList.remove('active');
    index++;
    if (index === slides.length) index = 0; 
    slides[index].classList.add('active');
  }, time);
}


//Shiny text
const quote = document.querySelector(".shiny");
const readout = document.querySelector("p");
quote.addEventListener("mousemove", (e) => {
  const { x, y } = quote.getBoundingClientRect();
  quote.style.setProperty("--x", e.clientX - x);
  quote.style.setProperty("--y", e.clientY - y);
});