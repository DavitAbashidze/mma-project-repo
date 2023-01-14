import {
  registerShowHide,
  registerBtn,
  registerMail,
  registerForm,
  registerPassword,
  registerName,
  registerConfirm,
  reginsterAgreement,
  registerRecieveEmails,
  registerWarning,
  registerEmptyInputWarning,
} from "./domElements.js";

if (registerShowHide) {
  registerShowHide.addEventListener("click", () => {
    if (registerPassword.type === "password") {
      registerPassword.type = "text";
      registerConfirm.type = "text";
    } else {
      registerPassword.type = "password";
      registerConfirm.type = "password";
    }
  });

  const user = {
    name: "",
    mail: "",
    password: "",
    repeatPassword: "",
    agreement: false,
    recieveEmails: false,
  };
  registerName.addEventListener("input", (e) => {
    user.name = e.target.value;
  });
  registerMail.addEventListener("input", (e) => {
    user.mail = e.target.value;
  });
  registerPassword.addEventListener("input", (e) => {
    user.password = e.target.value;
  });
  registerConfirm.addEventListener("input", (e) => {
    user.repeatPassword = e.target.value;
  });
  reginsterAgreement.addEventListener("click", () => {
    user.agreement = !user.agreement;
  });
  registerRecieveEmails.addEventListener("click", () => {
    user.recieveEmails = !user.recieveEmails;
  });
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (user.password !== user.repeatPassword) {
      registerWarning.classList.add("block");
    } else {
      registerWarning.classList.remove("block");
      if (
        !user.agreement ||
        !user.mail ||
        !user.name ||
        !user.password ||
        !user.repeatPassword ||
        !user.recieveEmails
      ) {
        if (!user.agreement) {
          registerEmptyInputWarning.textContent =
            "you need to agree to user agreement";
        }
        if (!user.mail) {
          registerEmptyInputWarning.textContent =
            "you need to enter your email";
        }
        if (!user.name) {
          registerEmptyInputWarning.textContent = "you need to enter your name";
        }
        if (!user.password && !user.repeatPassword) {
          registerEmptyInputWarning.textContent =
            "you need to enter your password";
        }
        if (!user.recieveEmails) {
          registerEmptyInputWarning.textContent =
            "you need to agree to recieve emails";
        }
      } else {
        let localUsers = JSON.parse(localStorage.getItem("users"));
        let users = [];
        if (!localUsers) {
          users.push(user);
          localStorage.setItem("users", JSON.stringify(users));
          localStorage.setItem("logged-in", "true");
          window.location.href = "/pages/index.html";
        } else if (
          localUsers.some(
            (localUser) =>
              localUser.mail === user.mail &&
              localUser.password === user.password
          )
        ) {
          registerEmptyInputWarning.textContent = "user already exists";
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
