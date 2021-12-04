const content = document.getElementById("screen");
let txt = "";
function erase() {
  txt = txt.split("").slice(0, -1).join("");
  content.innerText = txt;
}
function pressBtn(btn) {
  txt += btn;
  content.innerText = txt;
}
