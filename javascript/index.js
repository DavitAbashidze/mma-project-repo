import {
  ticket,
  chatBox,
  chatIcon,
  arrowLeft,
  arrowRight,
  sliderImage,
  rankings,
  arrowDown,
  arrowUp,
  dropdown,
} from "./utils/domElements.js";
import "./utils/sharedLayout.js";
const images = ["conor.jpg", "alex.jpg", "jorge.webp", "nate.jpg"];

rankings.forEach((button) => {
  let top = button.getBoundingClientRect().height;
  let center =
    (button.getBoundingClientRect().left +
      button.getBoundingClientRect().right) /
    2;
  button.addEventListener("mouseenter", () => {
    dropdown.style = `display: grid;
  grid-template-columns: repeat(2, 1fr);
  top: ${top}px;
  center: calc(${center}px - 8rem)`;
  });
});

let counter = 0;
if (chatIcon) {
  chatIcon.addEventListener("click", function () {
    chatBox.classList.toggle("display-block");
  });
}

if (ticket) {
  const btns = ticket.querySelectorAll("button");
  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      alert("Your ticket has been purchased");
    });
  });
}

if (arrowLeft) {
  arrowRight.addEventListener("click", function () {
    if (counter === images.length - 1) {
      counter = 0;
      sliderImage.src = `../images/${images[counter]}`;
      return;
    }
    counter += 1;
    sliderImage.src = `../images/${images[counter]}`;
  });
  arrowLeft.addEventListener("click", function () {
    if (counter === 0) {
      counter = images.length - 1;
      sliderImage.src = `../images/${images[counter]}`;
      return;
    }
    counter -= 1;
    sliderImage.src = `../images/${images[counter]}`;
  });
}

const navBtn = document.body.querySelector(".nav-btn");

const smallNav = document.body.querySelector(".small-nav");
navBtn.addEventListener("click", () => {
  smallNav.classList.toggle("display-flex");
});
