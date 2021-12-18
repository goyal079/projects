const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score ");
let seconds = 60;
let result = 0;
let timer;
let smashPos;
function randomSquare() {
  square.forEach((sqr) => {
    sqr.children[0].children[0].children[0].classList.remove("mole");
  });
  let randomBox = square[Math.floor(Math.random() * 9)];
  randomBox.children[0].children[0].children[0].classList.add("mole");
  //   assigning the id of randomBox to the smashPosition to access
  smashPos = randomBox.id;
}
square.forEach((sqr) => {
  sqr.addEventListener("mouseup", () => {
    if (sqr.id === smashPos) {
      result += 1;
      score.innerText = result;
    }
  });
});

function moleShift() {
  timer = setInterval(randomSquare, 700);
}
moleShift();
function CountDown() {
  seconds--;
  timeLeft.innerText = seconds;
  if (seconds == 0) {
    clearInterval(timer);
    clearInterval(countInt);
  }
}

let countInt = setInterval(CountDown, 1000);
