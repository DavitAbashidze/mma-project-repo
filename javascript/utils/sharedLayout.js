import { navBar, footer } from "./domElements.js";
navBar.innerHTML = `
    <ul>
        <a href="./index.html"><li>home</li></a>
        <a class = "dropdown-trigger" href="./chat.html"><li>rankings <i style ="display:none;" class="fa-solid fa-chevron-up"></i><i class="fa-solid fa-chevron-down"></i></li></a>
        <a href="./shops.html"><li>ticket</li></a>
        <a href="./slider.html"><li>events</li></a>
        <a href="./about.html"><li>about</li></a>
        <a href="./contact.html"><li>contact</li></a>
    </ul>
     <div class="dropdown">
      <button>flyweight</button><button>bantamweight</button
      ><button>featherweight</button><button>lightweight</button
      ><button>welterweight</button><button>middleweight</button
      ><button>light heavyweight</button><button>heavyweight</button>
    </div>

    <div class="small-nav-container">
      <button class="nav-btn"><i class="fa-solid fa-bars"></i></button>
      <i class="fa-solid fa-magnifying-glass"></i>
      <div class="small-nav">
        <a href="./index.html"><div>home</div></a>
        <a class = "dropdown-trigger" href="./chat.html"><div>rankings <i style ="display:none;" class="fa-solid fa-chevron-up"></i><i class="fa-solid fa-chevron-down"></i></div></a>
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
