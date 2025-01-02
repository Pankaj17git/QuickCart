import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
import { slidesData } from "../data/slider.js";

//Generate slider HTML Dynamically
let sliderHtml = '';
slidesData.forEach((slide) => {
sliderHtml += `
    <div class="slide">
      <img src="${slide.image}" class="img-fluid" alt="${slide.alt}">
    </div>
`;
});

document.querySelector('.js-slides') 
.innerHTML = sliderHtml;

const slides = document.querySelectorAll('.slides img')
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", () => {
  if (slides.length > 0) {
    initializeSlider();
    createDots();
    setupNavigation();
  } else {
    console.error("No slides found. Ensure slidesData contains valid entries.");
  }
});

function initializeSlider () {
  slides[slideIndex].classList.add('displaySlide')
  intervalId = setInterval(nextSlide, 5000);
}

//for slideshow

function showSlide(index) {
  const dots = document.querySelectorAll(".js-dot");

  if(index >= slides.length){
    slideIndex = 0;
  }else if(index < 0) {
    slideIndex = slides.length - 1;
  }
  // Update slide visibility
  slides.forEach(slide => {
    slide.classList.remove('displaySlide');
  });
  slides[slideIndex].classList.add('displaySlide')

  // Update active dot
  dots.forEach(dot => dot.classList.remove("active"));
  dots[slideIndex].classList.add("active");
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

//For automatic creation of the dots
function createDots() {
  const dotsContainer = document.querySelector(".dot-container");
  dotsContainer.innerHTML = "";

  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "dot js-dot";
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.js-dot');
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(intervalId); // Pause auto-slide
      slideIndex = index; // Go to clicked slide
      showSlide(slideIndex);
      intervalId = setInterval(nextSlide, 5000); // Restart auto-slide
    });
  });
}

function setupNavigation() {
  document.querySelectorAll('.js-prev').forEach(element => {
    element.addEventListener('click', () => {
      clearInterval(intervalId);
      prevSlide();
      intervalId = setInterval(nextSlide, 5000); // Restart auto-slide
    });
  });

  document.querySelectorAll('.js-next').forEach(element => {
    element.addEventListener('click', () => {
      clearInterval(intervalId);
      nextSlide();
      intervalId = setInterval(nextSlide, 5000); // Restart auto-slide
    });
  });
}




