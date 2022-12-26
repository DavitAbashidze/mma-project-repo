import "./utils/slider.js";
import "./utils/ticketsAndChat.js";
import "./utils/dropdown.js";
import "./utils/login.js";
import "./utils/register.js";
import fetchUser from "./utils/fetchRandomUser.js";
import displayHuman from "./utils/displayHuman.js";

// const navBtn = document.body.querySelector('.nav-btn');

// const smallNav = document.body.querySelector('.small-nav');
// navBtn.addEventListener('click', () => {
//   smallNav.classList.toggle('display-flex');
// });

async function show() {
  let human = await fetchUser();
  displayHuman(human);
}
show();
window.addEventListener("DOMContentLoaded", show);
