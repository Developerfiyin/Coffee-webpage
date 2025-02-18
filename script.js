const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
  //TOggle mobile menu visibility
});

//  close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  spaceBetween: 25,
  grabCursor: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next ",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerview: 1,
    },
    768: {
      slidesPerview: 2,
    },
    1024: {
      slidesPerview: 3,
    },
  },
});
