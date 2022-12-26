import { registerShowHide, registerPassword } from "./domElements.js";

if (registerShowHide && registerPassword) {
  registerShowHide.addEventListener("click", () => {
    if (registerPassword.type === "password") {
      registerPassword.type = "text";
    } else {
      registerPassword.type = "passdword";
    }
  });
}
