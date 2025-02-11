const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
  //TOggle mobile menu visibility
});

//  close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
