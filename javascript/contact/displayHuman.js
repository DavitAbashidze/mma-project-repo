import getElement from "./getElement.js";
const value = getElement(".user-title");
const picture = getElement(".user-img");
const title = getElement(".user-value");
const btns = [...document.querySelectorAll(".icon")];
function displayHuman(human) {
  picture.src = human.image;
  title.textContent = human.name;
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  btns[0].classList.add("active");
  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener("click", () => {
      value.textContent = `My ${label} is`;
      title.textContent = human[label];
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });
      btn.classList.add("active");
    });
  });
}
export default displayHuman;
