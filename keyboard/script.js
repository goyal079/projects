const content = document.getElementById("screen");
let txt = "";

let caps = false;
function capsLock() {
  caps = !caps;
}
function erase() {
  txt = txt.slice(0, -1);
  content.innerText = txt;
}
function pressBtn(btn) {
  if (!caps) {
    txt += btn.toLowerCase();
  } else {
    txt += btn;
  }
  content.innerText = txt;
}
function enter() {
  txt += "\n";
}
