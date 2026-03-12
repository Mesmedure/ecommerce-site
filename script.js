function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price,
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let cartList = document.getElementById("cart");

  if (!cartList) return;

  cartList.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    let li = document.createElement("li");

    li.textContent = item.name + " - $" + item.price;

    let btn = document.createElement("button");

    btn.textContent = "Remove";

    btn.onclick = function () {
      removeItem(index);
    };

    li.appendChild(btn);

    cartList.appendChild(li);

    total += item.price;
  });

  let totalElement = document.createElement("h3");
  totalElement.textContent = "Total: $" + total;

  cartList.appendChild(totalElement);
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart"));

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  loadCart();
}

loadCart();
