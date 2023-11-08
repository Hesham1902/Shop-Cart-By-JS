const products = document.querySelectorAll(".products li");
const cart = document.querySelector(".shop-cart");
const btn = document.querySelector("#btn");
const divPrice = document.querySelector('#price')
let totalPrice = 0;

products.forEach(function (item) {
  item.onclick = function () {
    totalPrice += +item.getAttribute("price");
    const cartItem = document.createElement("li");
    cartItem.className =
      "list-group-item d-flex justify-content-between align-items-center";
    cartItem.textContent = item.textContent;
    cart.appendChild(cartItem);
    if (cart != "") {
      btn.style.display = "block";
    }
  };
});

btn.onclick = function () {
    divPrice.innerHTML = `<h3>${totalPrice}</h3>`;
  console.log(totalPrice);
};
