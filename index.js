let currentPlayer = 1;
let player1Roll = 0;
let player2Roll = 0;

const heading = document.querySelector(".header");
const diceButton = document.querySelector(".btn-roll");
const player1Img = document.querySelector(".player1-img");
const player2Img = document.querySelector(".player2-img");
const player1Title = document.querySelector(".player1-title");
const player2Title = document.querySelector(".player2-title");

diceButton.addEventListener("click", () => {
  if (currentPlayer === 1) {
    player1Title.classList.add("player1Highlight");
    const random1 = Math.floor(Math.random() * 6) + 1;
    player1Img.setAttribute("src", `images/dice${random1}.png`);
    heading.innerHTML = `Player 2 Turn`;
    player1Roll = random1;
    currentPlayer = 0;
  } else {
    player1Title.classList.remove("player1Highlight");
    player2Title.classList.add("player2Highlight");
    const random2 = Math.floor(Math.random() * 6) + 1;
    player2Img.setAttribute("src", `images/dice${random2}.png`);

    player2Roll = random2;

    if (player1Roll > player2Roll) {
      heading.innerHTML = `Player 1 won &#x1F3C6; `;
    } else if (player1Roll < player2Roll) {
      heading.innerHTML = `Player 2 won &#x1F3C6; `;
    } else {
      heading.innerHTML = `Draw Both Win  &#x1F3C6; `;
    }
    currentPlayer = 1;
    setTimeout(() => {
      heading.innerHTML = "Player 1's Turn to Roll! 🎲";
      player2Title.classList.remove("player2Highlight");
      player1Img.setAttribute("src", `images/dice1.png`);
      player2Img.setAttribute("src", `images/dice1.png`);
      player1Roll = 0;
      player2Roll = 0;
    }, 2000);
  }
});
