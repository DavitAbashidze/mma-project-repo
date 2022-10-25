const navBar = document.body.querySelector(".nav-bar");

const sliderImage = document.body.querySelector(".slider-image");
const arrowLeft = document.body.querySelector(".fa-circle-chevron-left");
const arrowRight = document.body.querySelector(".fa-circle-chevron-right");
const footer = document.body.querySelector("footer");
const chatIcon = document.body.querySelector(".chat-icon");
const chatBox = document.body.querySelector(".chat-box");
const ticket = document.body.querySelector(".ticket");
const images = ["conor.jpg", "alex.jpg", "jorge.webp", "nate.jpg"];

let counter = 0;
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

if (arrowLeft) {
  arrowRight.addEventListener("click", function () {
    if (counter === images.length - 1) {
      counter = 0;
      sliderImage.src = `../images/${images[counter]}`;
      return;
    }
    counter += 1;
    sliderImage.src = `../images/${images[counter]}`;
  });
  arrowLeft.addEventListener("click", function () {
    if (counter === 0) {
      counter = images.length - 1;
      sliderImage.src = `../images/${images[counter]}`;
      return;
    }
    counter -= 1;
    sliderImage.src = `../images/${images[counter]}`;
  });
}

navBar.innerHTML = `
    <ul>
        <a href="./index.html"><li>home</li></a>
        <a href="./chat.html"><li>rankings</li></a>
        <a href="./shops.html"><li>ticket</li></a>
        <a href="./slider.html"><li>events</li></a>
        <a href="./about.html"><li>about</li></a>
    </ul>
    <div class="small-nav-container">
      <button class="nav-btn"><i class="fa-solid fa-bars"></i></button>
      <i class="fa-solid fa-magnifying-glass"></i>
      <div class="small-nav">
        <a href="./index.html"><div>home</div></a>
        <a href="./chat.html"><div>rankings</div></a>
        <a href="./shops.html"><div>ticket</div></a>
        <a href="./slider.html"><div>events</div></a>
        <a href="./about.html"><div>about</div></a>
      </div>
    </div>
    <form>
        <input type="text" placeholder="Search...">
        <button class="search-btn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
    </form>
`;
footer.innerHTML = `
 <div class="footer-div">
        <a class="stair1" href="./index.html">home</a>
        <a class="stair2" href="./chat.html">rankings</a>
        <a class="stair3" href="./shops.html">ticket</a>
        <a class="stair4" href="./slider.html">events</a>
        <a class="stair5" href="./about.html">about</a>
      </div>
      <form>
        <label for="name">name:</label>
        <input
          type="text"
          placeholder="Enter your name..."
          id="name"
          name="name"
        />
        <label for="address">address:</label>
        <input
          type="text"
          placeholder="Enter your address..."
          id="address"
          name="address"
        />
        <label for="email">email:</label>
        <input
          type="text"
          placeholder="example@email.com..."
          id="email"
          name="email"
        />
        <textarea
          name="user-message"
          placeholder="Enter your message..."
          id="user-message"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">submit</button>
      </form>
`;
const navBtn = document.body.querySelector(".nav-btn");

const smallNav = document.body.querySelector(".small-nav");
navBtn.addEventListener("click", () => {
  smallNav.classList.toggle("display-flex");
});
