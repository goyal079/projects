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
const vegetables = {
  Tomato: {
    name: "Tomato",
    price: "1.2$/kg",
  },
  Cucumber: {
    name: "Cucumber",
    price: "2$/kg",
  },
  Eggs: {
    name: "Eggs",
    price: "3$/dz",
  },
  CoffeeBeans: {
    name: "Coffee Beans",
    price: "3.6$/kg",
  },
  GreenPea: {
    name: "Green Pea",
    price: "0.8$/kg",
  },
};
const tableBody = document.getElementById("cart-items");
function reconstruct() {
  for (vege of Object.keys(localStorage)) {
    let itemRow = document.createElement("tr");
    let itemName = document.createElement("td");
    let itemPrice = document.createElement("td");
    let itemQty = document.createElement("td");
    let itemTotal = document.createElement("td");
    itemRow.setAttribute("id", vege);
    itemName.innerText = vegetables[vege].name;
    itemPrice.innerText = vegetables[vege].price;
    itemQty.innerText = localStorage.getItem(vege);
    itemTotal.innerText =
      (Number(itemPrice.innerText.split("$")[0]) * itemQty.innerText).toFixed(
        2
      ) + "$";
    itemRow.appendChild(itemName);
    itemRow.appendChild(itemPrice);
    itemRow.appendChild(itemQty);
    itemRow.appendChild(itemTotal);
    tableBody.appendChild(itemRow);
  }
}
reconstruct();
function addToCart(item) {
  let elId = item.getAttribute("id");
  const vegId = elId.split("-").join("");
  // console.log(elId);
  let newTd = document.createElement("td");
  if (localStorage[vegId]) {
    let irow = document.getElementById(vegId);
    let itemPrice = irow.children[1];
    let itemQty = irow.children[2];
    let itemTotal = irow.children[3];
    localStorage[vegId] = Number(localStorage[vegId]) + 1;
    itemQty.innerText = localStorage[vegId];
    itemTotal.innerText =
      (Number(itemPrice.innerText.split("$")[0]) * itemQty.innerText).toFixed(
        2
      ) + "$";
  } else {
    let itemRow = document.createElement("tr");
    let itemName = document.createElement("td");
    let itemPrice = document.createElement("td");
    let itemQty = document.createElement("td");
    let itemTotal = document.createElement("td");
    itemRow.setAttribute("id", vegId);
    itemName.innerText = vegetables[vegId].name;
    itemPrice.innerText = vegetables[vegId].price;
    itemQty.innerText = 1;
    const quant = itemQty.innerText;
    localStorage.setItem(vegId, quant);
    itemTotal.innerText =
      (Number(itemPrice.innerText.split("$")[0]) * itemQty.innerText).toFixed(
        2
      ) + "$";
    itemRow.appendChild(itemName);
    itemRow.appendChild(itemPrice);
    itemRow.appendChild(itemQty);
    itemRow.appendChild(itemTotal);
    tableBody.appendChild(itemRow);
  }
}

let cartIcons = document.querySelectorAll(".fa-cart-plus");
cartIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    let addedItem = e.target.parentElement;
    addToCart(addedItem);
  });
});
