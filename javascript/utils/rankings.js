import {
  rankings,
  winFilter,
  lossFilter,
  winStreakFilter,
  championFilter,
  oponentFilter,
  resetFilters,
} from "./domElements.js";

const fighters = [
  {
    name: "alexander volkanovski",
    wins: 25,
    losses: 1,
    winStreack: 22,
    nc: 0,
    weightClass: "featherweight",
    status: "featherweight champion",
    nextFigth: "islam makhachev",
  },
  {
    name: "islam makhachev",
    wins: 23,
    losses: 1,
    winStreack: 11,
    nc: 0,
    weightClass: "lightweight",
    status: "lightweight champion",
    nextFigth: "alexander volkanovski",
  },
  {
    name: "leon edwards",
    wins: 20,
    losses: 3,
    winStreack: 2,
    nc: 1,
    weightClass: "welterweight",
    status: "welterweight champion",
    nextFigth: "n/a",
  },
  {
    name: "kamaru usman",
    wins: 20,
    losses: 2,
    winStreack: 0,
    nc: 0,
    weightClass: "welterweight",
    status: "#1 in welterweight rankings",
    nextFigth: "n/a",
  },
  {
    name: "francis ngannou",
    wins: 17,
    losses: 3,
    winStreack: 6,
    nc: 0,
    weightClass: "heavyweight",
    status: "heavyweight champion",
    nextFigth: "n/a",
  },
  {
    name: "israel adesanya",
    wins: 23,
    losses: 2,
    winStreack: 0,
    nc: 0,
    weightClass: "middleweight",
    status: "#1 in middleweight rankings",
    nextFigth: "n/a",
  },
  {
    name: "charles oliveira",
    wins: 33,
    losses: 9,
    winStreack: 0,
    nc: 1,
    weightClass: "lightweight",
    status: "#1 in lightweight rankings",
    nextFigth: "n/a",
  },
  {
    name: "alex pereira",
    wins: 7,
    losses: 1,
    winStreack: 7,
    nc: 0,
    weightClass: "middleweight",
    status: "middleweight champion",
    nextFigth: "n/a",
  },
  {
    name: "aljamain sterling",
    wins: 22,
    losses: 3,
    winStreack: 8,
    nc: 0,
    weightClass: "bantamweight",
    status: "bantamweight champion",
    nextFigth: "n/a",
  },
  {
    name: "jiri prochazka",
    wins: 29,
    losses: 7,
    winStreack: 13,
    nc: 0,
    weightClass: "light heavyweight",
    status: "light heavyweight champion",
    nextFigth: "n/a",
  },
];

let filters = {
  win: 0,
  loss: 0,
  winStreak: 0,
  champion: false,
  nextOponent: false,
};

let newFighters = fighters;
if (rankings) {
  const filter = () => {
    newFighters = fighters
      .filter((fighter) => {
        return fighter.wins >= filters.win;
      })
      .filter((fighter) => {
        return fighter.losses >= filters.loss;
      })
      .filter((fighter) => {
        return fighter.winStreack >= filters.winStreak;
      })
      .filter((fighter) => {
        return filters.champion ? fighter.status.includes("champion") : fighter;
      })
      .filter((fighter) => {
        return filters.nextOponent ? fighter.nextFigth !== "n/a" : fighter;
      });
    const list = newFighters
      .map((fighter, index) => {
        const {
          name,
          wins,
          losses,
          winStreack,
          nc,
          weightClass,
          status,
          nextFigth,
        } = fighter;
        return `
      <tr>
        <td><span class="black" >${index + 1}</span></td>
        <td><span>${name}</span></td>
        <td><span>${wins}</span>-<span class="red">${losses}</span>${
          nc ? `<span class="n-c">(${nc})</span>` : ""
        }</td>
        <td><span>${winStreack}</span></td>
        <td><span class="black" >${weightClass}</span></td>
        <td>${
          status.includes("champion")
            ? `<span class="champ">${status}</span>`
            : `<span class="black">${status}</span>`
        }</td>
        <td>${
          nextFigth === "n/a"
            ? `<span class="black">${nextFigth}</span>`
            : `<span class="blue">${nextFigth}</span>`
        }</td>
      </tr>
    `;
      })
      .join("");

    const tbody = document.querySelector(".tbody");
    tbody.innerHTML = list;
  };

  winFilter.addEventListener("input", (e) => {
    winFilter.nextElementSibling.lastChild.textContent = e.target.value;
    filters.win = e.target.value;
    filter();
  });
  lossFilter.addEventListener("input", (e) => {
    lossFilter.nextElementSibling.lastChild.textContent = e.target.value;
    filters.loss = e.target.value;
    filter();
  });
  winStreakFilter.addEventListener("input", (e) => {
    winStreakFilter.nextElementSibling.lastChild.textContent = e.target.value;
    filters.winStreak = e.target.value;
    filter();
  });
  championFilter.addEventListener("click", () => {
    filters.champion = !filters.champion;
    filter();
  });
  oponentFilter.addEventListener("click", () => {
    filters.nextOponent = !filters.nextOponent;
    filter();
  });
  resetFilters.addEventListener("click", () => {
    filters = {
      win: 0,
      loss: 0,
      winStreak: 0,
      champion: false,
      nextOponent: false,
    };
    winFilter.value = filters.win;
    lossFilter.value = filters.loss;
    winStreakFilter.value = filters.winStreak;
    lossFilter.nextElementSibling.lastChild.textContent = filters.win;
    winFilter.nextElementSibling.lastChild.textContent = filters.loss;
    winStreakFilter.nextElementSibling.lastChild.textContent =
      filters.winStreak;
    championFilter.checked = false;
    oponentFilter.checked = false;
    filter();
  });
  const list = newFighters
    .map((fighter, index) => {
      const {
        name,
        wins,
        losses,
        winStreack,
        nc,
        weightClass,
        status,
        nextFigth,
      } = fighter;
      return `
      <tr>
        <td><span class="black" >${index + 1}</span></td>
        <td><span>${name}</span></td>
        <td><span>${wins}</span>-<span class="red">${losses}</span>${
        nc ? `<span class="n-c">(${nc})</span>` : ""
      }</td>
        <td><span>${winStreack}</span></td>
        <td><span class="black" >${weightClass}</span></td>
        <td>${
          status.includes("champion")
            ? `<span class="champ">${status}</span>`
            : `<span class="black">${status}</span>`
        }</td>
        <td>${
          nextFigth === "n/a"
            ? `<span class="black">${nextFigth}</span>`
            : `<span class="blue">${nextFigth}</span>`
        }</td>
      </tr>
    `;
    })
    .join("");

  const tbody = document.createElement("tbody");
  tbody.classList.add("tbody");
  tbody.innerHTML = list;
  rankings.appendChild(tbody);
}
