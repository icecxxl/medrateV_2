// Initialize Swiper section
const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
};


// Hero section heading edits
const changingText = document.getElementById('changing-text');
const texts = ['Rate', 'Review', 'Improve'];
let currentIndex = 0;

function changeText() {
  changingText.classList.add('fade-out');
  setTimeout(() => {
    changingText.textContent = texts[currentIndex];
    changingText.classList.remove('fade-out');
    changingText.classList.add('fade-in');
    currentIndex = (currentIndex + 1) % texts.length;
    setTimeout(() => {
      changingText.classList.remove('fade-in');
    }, 300);
  }, 300);
}

// Call the changeText function initially
changeText();

// Set an interval to call the changeText function every 2 seconds
setInterval(changeText, 3000);

// reviews section, toggle content of each review card
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const reviewCards = document.querySelectorAll('.review-card');
let newIndex = 0;

// Display the initial review card
reviewCards[newIndex].classList.add('show-card');

// Event listener for the previous button
prevButton.addEventListener('click', () => {
  reviewCards[newIndex].classList.remove('show-card');
  newIndex = (newIndex - 1 + reviewCards.length) % reviewCards.length;
  reviewCards[newIndex].classList.add('show-card');
});

// Event listener for the next button
nextButton.addEventListener('click', () => {
  reviewCards[newIndex].classList.remove('show-card');
  newIndex = (newIndex + 1) % reviewCards.length;
  reviewCards[newIndex].classList.add('show-card');
});
