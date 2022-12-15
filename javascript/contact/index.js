import "./sharedLayout.js";
import fetchUser from "./fetchRandomUser.js";
import getElement from "./getElement.js";
import displayHuman from "./displayHuman.js";

async function show() {
  let human = await fetchUser();
  displayHuman(human);
}
show();
window.addEventListener("DOMContentLoaded", show);
