const prevSlide = document.querySelector("#prevSlide");
const nextSlide = document.querySelector("#nextSlide");
const counterProgress = document.querySelector("#counterProgress");
const counterTotal = document.querySelector("#counterTotal");
const progress = document.querySelector(".complete");

const slides = [
  {
    title: "Sweet Fruit",
    url: "./assets/images/1.jpeg"
  },
  {
    title: "Good Present",
    url: "./assets/images/2.jpeg",
  },
  {
    title: "Mockup Cream",
    url: "./assets/images/3.jpeg",
  },
  {
    title: "Delicious Apple",
    url: "./assets/images/4.jpeg",
  },
  {
    title: "Blue Lemon",
    url: "./assets/images/5.jpeg",
  },
  {
    title: "Sweet Cherry",
    url: "./assets/images/6.jpeg",
  },
];
let slidesInPage = 3;
let currentPage = 1;
let pages = 4;
let currentView = "desktop";

counterProgress.innerText = formattedNumber(currentPage);
counterTotal.innerText = formattedNumber(pages);

window.addEventListener("resize", function() {
  let newView = "";
  if (window.innerWidth > 1024) {
    slidesInPage = 3;
    pages = 4;
    newView = "desktop";
  } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
    slidesInPage = 2;
    pages = 5;
    newView = "tablet";
  } else if (window.innerWidth <= 768) {
    slidesInPage = 1;
    pages = 6;
    newView = "mobile";
  }

  if (newView !== currentView) {
    renderSlides();
    currentView = newView;
  }
});

window.addEventListener("load", function() {
  renderSlides();
});

function formattedNumber(num) {
  return num < 10 ? `0${num}` : num;
}

prevSlide.addEventListener("click", function() {
  if (currentPage > 1) {
    currentPage -= 1;
  } else {
    currentPage = pages;
  }
  renderSlides();
});

nextSlide.addEventListener("click", function() {
  if (currentPage < pages) {
    currentPage += 1;
  } else {
    currentPage = 1;
  }
  renderSlides();
});

function renderSlides() {
  const sliderDiv = document.querySelector(".slider");
  sliderDiv.innerHTML = "";
  let index = currentPage - 1;
  for (let i = 0; i < slidesInPage; i++) {
    sliderDiv.innerHTML += `
      <div class="slide">
        <div class="image" style="background-image: url(${slides[index].url})"></div>
        <div class="detail">${slides[index].title}</div>
      </div>
    `;
    index++;
  }

  updateControls();
}

function updateControls() {
  counterProgress.innerText = formattedNumber(currentPage);
  counterTotal.innerText = formattedNumber(pages);
  const newWidth = (currentPage / pages) * 100;
  progress.style.width = `${newWidth}%`;
}