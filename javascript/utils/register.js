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
      if (
        !user.name ||
        !user.login ||
        !user.confirmPassword ||
        !user.password ||
        !user.userAgreement ||
        !user.userRecieveEmail
      ) {
        if (!user.name) {
          emptyInputWarning.textContent = "please write your name!";
        }
        if (!user.login) {
          emptyInputWarning.textContent = "please write your login!";
        }
        if (!user.password) {
          emptyInputWarning.textContent = "please write your password!";
        }
        if (!user.confirmPassword) {
          emptyInputWarning.textContent = "please confirm your password! ";
        }
        if (!user.userAgreement) {
          emptyInputWarning.textContent =
            "you need to agree to the user agreement!";
        }
        if (!user.userRecieveEmail) {
          emptyInputWarning.textContent = "you need to recieve emails!";
        }
      } else {
        emptyInputWarning.textContent = "";
        let localUsers = JSON.parse(localStorage.getItem("users"));
        let users = [];
        if (!localUsers) {
          users.push(user);
          localStorage.setItem("users", JSON.stringify(users));
          localStorage.setItem("logged-in", "true");
          window.location.href = "/pages/index.html";
        } else if (
          localUsers.some((localUser) => {
            return localUser.login === user.login;
          })
        ) {
          emptyInputWarning.textContent = "user already exist!";
        } else {
          users = [...JSON.parse(localStorage.getItem("users")), user];
          localStorage.setItem("users", JSON.stringify(users));
          localStorage.setItem("logged-in", "true");
          window.location.href = "/pages/index.html";
        }
      }
    }
  });
}
