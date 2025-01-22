const rollButton = document.querySelector(".btn-roll");

rollButton.addEventListener("click", () => {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  const player1Img = document.querySelector(".player1-img");
  player1Img.setAttribute("src", `images/dice${randomNumber1}.png`);

  const player2Img = document.querySelector(".player2-img");
  player2Img.setAttribute("src", `images/dice${randomNumber2}.png`);

  const winnerDeclearation = document.querySelector(".header");

  if (randomNumber1 > randomNumber2) {
    winnerDeclearation.innerHTML = `Player 1 won &#x1F3C6;`;
  } else if (randomNumber1 === randomNumber2) {
    winnerDeclearation.innerHTML = `Draw Both Win &#x1F3C6;`;
  } else {
    winnerDeclearation.innerHTML = `Player 2 won &#x1F3C6;`;
  }
});
