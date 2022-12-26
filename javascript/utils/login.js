import { loginShowHide, loginPassword } from "./domElements.js";

if (loginShowHide && loginPassword) {
  loginShowHide.addEventListener("click", () => {
    if (loginPassword.type === "password") {
      loginPassword.type = "text";
    } else {
      loginPassword.type = "passdword";
    }
  });
}
