import "./utils/slider.js";
import "./utils/ticketsAndChat.js";
import "./utils/dropdown.js";
import "./utils/login.js";
import "./utils/register.js";
import "./utils/about.js";
import "./utils/rankings.js";
import fetchUser from "./utils/fetchRandomUser.js";
import displayHuman from "./utils/displayHuman.js";
import {
  logOut,
  hamburgerToggle,
  smallNav,
  smallLogOut,
} from "./utils/domElements.js";

if (logOut) {
  logOut.addEventListener("click", () => {
    localStorage.setItem("logged-in", "false");
    window.location.href = "../pages/landing.html";
  });
}
if (smallLogOut) {
  smallLogOut.addEventListener("click", () => {
    localStorage.setItem("logged-in", "false");
    window.location.href = "../pages/landing.html";
  });
}
if (hamburgerToggle) {
  hamburgerToggle.addEventListener("click", () => {
    smallNav.classList.toggle("display-flex");
  });
}

async function show() {
  let human = await fetchUser();
  displayHuman(human);
}
show();
window.addEventListener("DOMContentLoaded", show);
