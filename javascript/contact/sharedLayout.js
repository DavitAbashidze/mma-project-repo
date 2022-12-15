import getElement from "./getElement.js";
let navBar = getElement(".nav-bar");
let footer = getElement("footer");
navBar.innerHTML = `
    <ul>
        <a href="./index.html"><li>home</li></a>
        <a href="./chat.html"><li>rankings</li></a>
        <a href="./shops.html"><li>ticket</li></a>
        <a href="./slider.html"><li>events</li></a>
        <a href="./about.html"><li>about</li></a>
        <a href="./contact.html"><li>contact</li></a>
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
        <a href="./contact.html"><div>contact</div></a>
        
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
        <a class="stair6" href="./contact.html">contact</a>
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
