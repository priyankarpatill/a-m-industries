// const carouselContainer = document.querySelector('.carousel-container');
// const images = document.querySelectorAll('.carousel-images img');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');

// let currentIndex = 0;

// function updateCarousel() {
//   const offset = -currentIndex * 100; // Move to the current image
//   carouselContainer.style.transform = `translateX(${offset}%)`;
// }

// prevBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
//   updateCarousel();
// });

// nextBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
//   updateCarousel();
// });


const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Update the active image
function updateCarousel() {
  images.forEach((img, index) => {
    img.classList.remove('active'); // Remove active class from all
    if (index === currentIndex) {
      img.classList.add('active'); // Add active class to the current image
    }
  });
}

// Handle previous button click
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
  updateCarousel();
});

// Handle next button click
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});

// Initialize carousel
updateCarousel();
