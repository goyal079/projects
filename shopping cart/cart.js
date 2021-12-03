const bars = document.getElementById("bars");
const navlist = document.getElementById("dropbar");
const navs = document.getElementById("nav");
bars.addEventListener("click", () => {
  navs.classList.toggle("navactive");
  navlist.classList.toggle("baractive");
});
