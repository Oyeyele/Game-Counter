const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1display = document.querySelector("#p1display");
const p2display = document.querySelector("#p2display");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false; //
// use ur console to avoid confusion, isGameOver = false is the same as !isGameOver

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    p1display.textContent = p1Score;
  }
  if (p1Score === winningScore) {
    isGameOver = true; // once this is true the code wont run again as isGameOver is now true
    p1display.classList.add("has-text-success");
    p2display.classList.add("has-text-danger");
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    p2display.textContent = p2Score;
  }
  if (p2Score === winningScore) {
    isGameOver = true; // once this is true the code wont run again as isGameOver is now true
    p2display.classList.add("has-text-success");
    p1display.classList.add("has-text-danger");
    p1Button.disabled = true;
    p2Button.disabled = true; //disabled property comes with bulma
  }
});

//change event should be listened to below as that is the right thing
winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1display.textContent = 0;
  p2display.textContent = 0;
  p1display.classList.remove("has-text-success", "has-text-danger");
  p2display.classList.remove("has-text-success", "has-text-danger");
  p1Button.disabled = false;
  p2Button.disabled = false;
}
