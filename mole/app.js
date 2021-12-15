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
