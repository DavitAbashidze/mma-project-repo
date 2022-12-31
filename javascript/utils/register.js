import {
  registerShowHide,
  registerPassword,
  agreement,
  recieveEmail,
  emptyInputWarning,
  warning,
  confirm,
  registerName,
  registerMail,
  registerForm,
  registerBtn,
} from "./domElements.js";

if (registerShowHide && registerPassword) {
  registerShowHide.addEventListener("click", () => {
    if (registerPassword.type === "password") {
      registerPassword.type = "text";
      confirm.type = "text";
    } else {
      registerPassword.type = "password";
      confirm.type = "password";
    }
  });

  let user = {
    name: "",
    login: "",
    password: "",
    confirmPassword: "",
    userAgreement: false,
    userRecieveEmail: false,
  };
  registerName.addEventListener("input", (e) => {
    user.name = e.target.value;
  });
  registerMail.addEventListener("input", (e) => {
    user.login = e.target.value;
  });
  registerPassword.addEventListener("input", (e) => {
    user.password = e.target.value;
  });
  confirm.addEventListener("input", (e) => {
    user.confirmPassword = e.target.value;
  });
  agreement.addEventListener("click", () => {
    user.userAgreement = true;
  });
  recieveEmail.addEventListener("click", () => {
    user.userRecieveEmail = !user.userRecieveEmail;
  });
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  registerBtn.addEventListener("click", () => {
    if (user.password !== user.confirmPassword) {
      warning.classList.add("block");
    } else {
      warning.classList.remove("block");
    }
  });
}
