import {
  rankings,
  winFilter,
  lossFilter,
  winStreakFilter,
  championFilter,
  oponentFilter,
  resetFilter,
} from "./domElements.js";
let fighters = [
  {
    name: "alexander volkanovski",
    wins: 25,
    losses: 1,
    draw: 0,
    nc: 0,
    winStreak: 22,
    weightClass: "featherweight",
    status: "featherweight champion",
    nextFight: "islam makhachev",
    p4p: 1,
  },
  {
    name: "islam makhachev",
    wins: 23,
    losses: 1,
    draw: 0,
    nc: 0,
    winStreak: 11,
    weightClases: "lightweight",
    status: "lightweight champion",
    nextFight: "alexander volkanovski",
    p4p: 2,
  },
  {
    name: "leon edwards",
    wins: 20,
    losses: 3,
    draw: 0,
    nc: 1,
    winStreak: 2,
    weightClases: "welterweight",
    status: "welterweight champion",
    nextFight: "n/a",
    p4p: 3,
  },
  {
    name: "kamaru usman",
    wins: 20,
    losses: 2,
    draw: 0,
    winStreak: 0,
    nc: 0,
    weightClass: "welterweight",
    status: "#1 in welterweight rankings",
    nextFigth: "n/a",
    p4p: 4,
  },
  {
    name: "francis ngannou",
    wins: 17,
    losses: 3,
    draw: 0,
    winStreak: 6,
    nc: 0,
    weightClass: "heavyweight",
    status: "heavyweight champion",
    nextFigth: "n/a",
    p4p: 5,
  },
  {
    name: "israel adesanya",
    wins: 23,
    losses: 2,
    draw: 0,
    winStreak: 0,
    nc: 0,
    weightClass: "middleweight",
    status: "#1 in middleweight rankings",
    nextFigth: "n/a",
    p4p: 6,
  },
  {
    name: "charles oliveira",
    wins: 33,
    losses: 9,
    draw: 0,
    winStreak: 0,
    nc: 1,
    weightClass: "lightweight",
    status: "#1 in lightweight rankings",
    nextFigth: "n/a",
    p4p: 7,
  },
  {
    name: "alex pereira",
    wins: 7,
    losses: 1,
    draw: 0,
    winStreak: 7,
    nc: 0,
    weightClass: "middleweight",
    status: "middleweight champion",
    nextFigth: "n/a",
    p4p: 8,
  },
  {
    name: "aljamain sterling",
    wins: 22,
    losses: 3,
    draw: 0,
    winStreak: 8,
    nc: 0,
    weightClass: "bantamweight",
    status: "bantamweight champion",
    nextFigth: "n/a",
    p4p: 9,
  },
  {
    name: "jiri prochazka",
    wins: 29,
    losses: 3,
    draw: 1,
    winStreak: 13,
    nc: 0,
    weightClass: "light heavyweight",
    status: "light heavyweight champion",
    nextFigth: "n/a",
    p4p: 10,
  },
];

let filters = {
  win: 0,
  loss: 0,
  winStreak: 0,
  champion: false,
  nextFight: false,
};
let newFighters = fighters;

if (rankings) {
  let list = newFighters
    .map((fighter, index) => {
      const {
        name,
        wins,
        losses,
        draw,
        nc,
        winStreak,
        status,
        p4p,
        weightClases,
        nextFight,
      } = fighter;
      return `
         <tr>
          <td>
            <span class="black">${index + 1}</span>
          </td>
          <td>
            <span>${name}</span>
          </td>
          <td><span>${wins}</span>-<span class="red">${losses}</span>
          <span class="blue">${draw}</span>
        ${
          nc
            ? `
            <span class="n-c">${nc}</span>`
            : ""
        }
          </td>
          <td><span>${winStreak}</span></td>
          <td><span class="black">${weightClases}</span></td>
          <td>${
            status.includes("champion")
              ? `
          <span class="champ">${status}</span>`
              : `<span class="black">${status}</span>`
          }</td>
          <td>
          ${
            nextFight === "n/a"
              ? `
          <span class="black">${nextFight}</span>`
              : `<span class="blue">${nextFight}</span>`
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
