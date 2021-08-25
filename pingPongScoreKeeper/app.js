const playerOneScore = document.querySelector("#playerOneScore");
const playerTwoScore = document.querySelector("#playerTwoScore");
const playerOneButton = document.querySelector("#playerOneButton");
const playerTwoButton = document.querySelector("#playerTwoButton");
const resetButton = document.querySelector("#resetButton");
const winningScoreSelect = document.querySelector("#playto");

let score1 = 0;
let score2 = 0;
let isGameOver = false;
let winningScore = 3;

playerOneButton.addEventListener("click", function (e) {
  if (!isGameOver) {
    score1 += 1;
    playerOneScore.innerHTML = score1;
    if (score1 === winningScore) {
      playerOneScore.style.color = "green";
      playerTwoScore.style.color = "red";
      isGameOver = true;
    }
  }
});

playerTwoButton.addEventListener("click", function (e) {
  if (!isGameOver) {
    score2 += 1;
    playerTwoScore.innerHTML = score2;

    if (score2 === winningScore) {
      playerTwoScore.style.color = "green";
      playerOneScore.style.color = "red";
      isGameOver = true;
    }
  }
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  score1 = 0;
  score2 = 0;
  playerOneScore.innerHTML = 0;
  playerOneScore.style.color = "black";
  playerTwoScore.innerHTML = 0;
  playerTwoScore.style.color = "black";
}


