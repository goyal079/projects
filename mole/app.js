function burrow(num) {
  const grid = document.getElementById("grid");
  for (let i = 0; i < num; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("id", i + 1);
    grid.appendChild(square);
  }
}
burrow(9);

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
    sqr.classList.remove("mole");
  });
  let randomBox = square[Math.floor(Math.random() * 9)];
  randomBox.classList.add("mole");
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
  timer = setInterval(randomSquare, 500);
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
