let detailsItem = document.getElementById("Details");
let noProductsDom = document.getElementById("noItem");
let badgeDom = document.querySelector(".badge");

function drawCartProductUI(allProducts = []) {

  // check item or no 
  if (JSON.parse(localStorage.getItem("productsInCart")).length === 0) {
    noProductsDom.innerHTML = "no items here";
  } else {
    noProductsDom.innerHTML = "Your items";
  }
    


let products = JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
let productsUI = products.map((item) => {
    let totalPrice = item.price * item.qty;
  return `
  <div class="whish-list">

      <div class="image">
        <img src=${item.imageUrl} alt="">
      </div>

      <div class="content">
        <h2 class="title">
        ${item.title}
        </h2>
        <span class="qty">Quantity (${item.qty})</span>
        <p class="avilb">
          Avilability: <span class="stock">In Stock</span>
        </p>
      </div>

      <div class="price">$${totalPrice}</div>
      <button href="#" class="remove" onclick="removeItemFromCart(${item.id})">
        remove from cart
      </button>
      </div>
    
    `;
  }).join("");

  detailsItem.innerHTML = productsUI;
}
drawCartProductUI();

// Remove Product
function removeItemFromCart(id) {
  let confirmed = confirm("Are you sure you want to remove this item from your cart?");
  if (confirmed) {
    let productsInCart = localStorage.getItem("productsInCart");
    if (productsInCart) {
      let items = JSON.parse(productsInCart);
      let itemIndex = items.findIndex((item) => item.id === id);
      if (itemIndex > -1) {
        if (items[itemIndex].qty > 1) {
          items[itemIndex].qty--;
          items[itemIndex].totalPrice -= items[itemIndex].price;
        } else {
          items.splice(itemIndex, 1);
        }
        localStorage.setItem("productsInCart", JSON.stringify(items));
        drawCartProductUI(items);
      }
    }
  }
}