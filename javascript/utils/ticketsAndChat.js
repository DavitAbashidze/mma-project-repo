import {
  chat,
  chatIcon,
  chatBox,
  messageInput,
  sendBtn,
  ticket,
} from "./domElements.js";

let message = "";
if (chatIcon) {
  chatIcon.addEventListener("click", () => {
    chat.classList.toggle("display-flex");
  });
  messageInput.addEventListener("input", (e) => {
    message = e.target.value;
  });
  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.classList.add("message-right");
    span.textContent = message;
    div.classList.add("msg-container");
    div.appendChild(span);
    chatBox.appendChild(div);
    div.scrollIntoView({ behavior: "smooth" });
  });
}

if (ticket) {
  const btns = ticket.querySelectorAll("button");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Your ticket has been purchased");
    });
  });
}
