import {
  loginPassword,
  loginShowHide,
  loginBtn,
  loginMail,
  loginForm,
  loginWarning,
} from "./domElements.js";

if (loginShowHide) {
  loginShowHide.addEventListener("click", () => {
    if (loginPassword.type === "password") {
      loginPassword.type = "text";
    } else if (loginPassword.type === "text") {
      loginPassword.type = "password";
    }
  });
  const user = { login: "", password: "" };
  loginForm.addEventListener("submit", () => {
    e.preventDefault();
  });
  loginMail.addEventListener("input", (e) => {
    user.login = e.target.value;
  });
  loginPassword.addEventListener("input", (e) => {
    user.password = e.target.value;
  });

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const users = [...JSON.parse(localStorage.getItem("users"))];
    const userExists = users.some((localUser) => {
      return (
        localUser.login === user.login && localUser.password === user.password
      );
    });
    if (!userExists) {
      loginWarning.textContent = "Either login or password is wrong!";
    } else {
      localStorage.setItem("logged-in", "true");
      window.location.href = "/pages/index.html";
    }
  });
}
