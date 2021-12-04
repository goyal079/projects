const content = document.getElementById("screen");
let txt = "";

function pressBtn(btn) {
  txt += btn;
  content.innerText = txt;
}
