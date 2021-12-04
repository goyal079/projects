const content = document.getElementById("screen");
let txt = "";
function erase() {
  txt = txt.slice(0, -1);
  content.innerText = txt;
}
function pressBtn(btn) {
  txt += btn;
  content.innerText = txt;
}
function enter() {
  txt += "\n";
}
