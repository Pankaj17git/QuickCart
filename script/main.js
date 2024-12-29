import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
import { slidesData } from "../data/slider.js";


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

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider () {

  if(slides.length > 0) {
    slides[slideIndex].classList.add('displaySlide')
    intervalId=  setInterval(nextSlide, 5000);
  }

}

//for slideshow

function showSlide(index) {
  let i;
  let dots = document.getElementsByClassName("js-dot");

  if(index >= slides.length){
    slideIndex = 0;
  }else if(index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove('displaySlide');
  });
  slides[slideIndex].classList.add('displaySlide')

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex].className += " active";


}

//For automatic creation of the dots

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slides .slide");
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
      clearInterval(intervalId); 
      slideIndex = index; 
      showSlide(slideIndex); 
      intervalId = setInterval(nextSlide, 5000); // Restart the interval
    });
  });
 
})

document.querySelectorAll('.js-prev')
.forEach((element) =>{
  element.addEventListener('click', () => {
    prevSlide();
  });
});

document.querySelectorAll('.js-next')
.forEach((element) =>{
  element.addEventListener('click', () => {
   nextSlide();
  });
})
function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

