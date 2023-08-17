// drawing canvas
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
function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);






// slideshow
let slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
// Apply to all slideshows that you define with the markup wrote
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

  let slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

  let index = 0, time = 5000;
  slides[index].classList.add('active');  
  
  setInterval( () => {
    slides[index].classList.remove('active');
    
    //Go over each slide incrementing the index
    index++;
    
    // If you go over all slides, restart the index to show the first slide and start again
    if (index === slides.length) index = 0; 
    
    slides[index].classList.add('active');

  }, time);
}

const quote = document.querySelector(".shiny");

const readout = document.querySelector("p");

quote.addEventListener("mousemove", (e) => {
  const { x, y } = quote.getBoundingClientRect();
  quote.style.setProperty("--x", e.clientX - x);
  quote.style.setProperty("--y", e.clientY - y);
});