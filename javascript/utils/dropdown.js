import {
  trigger,
  arrowDown,
  arrowUp,
  dropdown,
  navBar,
} from "./domElements.js";

if (dropdown) {
  let top = trigger.getBoundingClientRect().height;
  let center =
    (trigger.getBoundingClientRect().left +
      trigger.getBoundingClientRect().right) /
    2;
  trigger.addEventListener("mouseenter", () => {
    dropdown.style = `
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          top: ${top}px;
          left: calc(${center}px - 11rem);
        `;
    arrowUp.style = `
          display: inline-block;
        `;
    arrowDown.style = `
          display: none;
        `;
  });
}
if (navBar) {
  navBar.addEventListener("mouseleave", () => {
    dropdown.style = `display: none;`;
    arrowUp.style = `
      display: none;
    `;
    arrowDown.style = `
      display: inline-block;
    `;
  });
}
