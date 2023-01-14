const plusBtns = [...document.querySelectorAll(".plus")];

if (plusBtns.length > 0) {
  plusBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.parentElement.nextElementSibling.style.display === "block") {
        btn.parentElement.nextElementSibling.style.display = "none";
      } else {
        btn.parentElement.nextElementSibling.style.display = "block";
      }
    });
  });
}
