import { chatBox, chatIcon, ticket } from "./domElements.js";

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
