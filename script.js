function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(product + " added to cart");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let cartList = document.getElementById("cart");

  if (!cartList) return;

  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    let li = document.createElement("li");

    li.textContent = item;

    let btn = document.createElement("button");

    btn.textContent = "Remove";

    btn.onclick = function () {
      removeItem(index);
    };

    li.appendChild(btn);

    cartList.appendChild(li);
  });
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart"));

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  loadCart();
}

loadCart();
