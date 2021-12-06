// hamburger menu
const bars = document.getElementById("bars");
const navlist = document.getElementById("dropbar");
const navs = document.getElementById("nav");
bars.addEventListener("click", () => {
  navs.classList.toggle("navactive");
  navlist.classList.toggle("baractive");
});
// cart icon
const cart = document.getElementById("cart");
const cartPage = document.getElementById("cart-page");
cart.addEventListener("click", () => {
  cartPage.classList.toggle("hide");
});
// add to cart
const tableBody = document.getElementById("cart-items");
function reconstruct() {
  for (vege of Object.keys(localStorage)) {
    let itemRow = document.createElement("tr");
    let itemName = document.createElement("td");
    let itemPrice = document.createElement("td");
    let itemQty = document.createElement("td");
    let itemTotal = document.createElement("td");
    itemRow.setAttribute("id", vege);
    itemName.innerText = vege;
    const item = document.getElementById(vege);
    itemPrice.innerText = item.children[2].children[0].children[1].innerText;
    itemQty.innerText = localStorage.getItem(vege);
    itemTotal.innerText =
      Number(itemPrice.innerText.split("$")[0]) * itemQty.innerText + "$";
    itemRow.appendChild(itemName);
    itemRow.appendChild(itemPrice);
    itemRow.appendChild(itemQty);
    itemRow.appendChild(itemTotal);
    tableBody.appendChild(itemRow);
  }
}
reconstruct();
function addToCart(item) {
  let itemRow = document.createElement("tr");
  let itemName = document.createElement("td");
  let itemPrice = document.createElement("td");
  let itemQty = document.createElement("td");
  let itemTotal = document.createElement("td");
  itemName.innerText = item.children[2].children[0].children[0].innerText;
  const vege = itemName.innerText;
  itemRow.setAttribute("id", vege);
  itemPrice.innerText = item.children[2].children[0].children[1].innerText;
  itemQty.innerText = 1;
  const quant = itemQty.innerText;
  localStorage.setItem(vege, quant);
  itemTotal.innerText =
    Number(itemPrice.innerText.split("$")[0]) * itemQty.innerText + "$";
  itemRow.appendChild(itemName);
  itemRow.appendChild(itemPrice);
  itemRow.appendChild(itemQty);
  itemRow.appendChild(itemTotal);
  tableBody.appendChild(itemRow);
}
// const prod = document.getElementById("prod2");
// addToCart(prod);
let cartIcons = document.querySelectorAll(".fa-cart-plus");
cartIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    let addedItem = e.target.parentElement;
    addToCart(addedItem);
  });
});
