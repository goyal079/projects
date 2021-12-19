const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
const startBtn = document.getElementById("start");
var audio = new Audio("./whack.mp3");
let score = document.querySelector("#score ");
let seconds;
let result;
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
  sqr.addEventListener("click", () => {
    if (sqr.id === smashPos) {
      result += 1;
      score.innerText = result;
      audio.play();
    }
  });
});

function moleShift() {
  timer = setInterval(randomSquare, 1000);
}
let flag;

start.addEventListener("click", () => {
  if (!flag) {
    flag = true;
    seconds = 60;
    result = 0;
    score.innerText = result;
    moleShift();
    function CountDown() {
      seconds--;
      timeLeft.innerText = seconds;
      if (seconds == 0) {
        clearInterval(timer);
        clearInterval(countInt);
        flag = false;
      }
    }
    var countInt = setInterval(CountDown, 1000);
  }
});
