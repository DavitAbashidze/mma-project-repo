import { arrowLeft, arrowRight, sliderImage } from "./domElements.js";

const images = ["conor.jpg", "alex.jpg", "jorge.webp", "nate.jpg"];
let counter = 0;

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
