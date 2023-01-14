let detailsItem = document.getElementById("Details");
let noProductsDom = document.getElementById("noItem");
function drawCartProductUI(allProducts = []) {

  // check item or no 
  if (JSON.parse(localStorage.getItem("productsInCart")).length === 0) {
    noProductsDom.innerHTML = "no items here";
  } else {
    noProductsDom.innerHTML = "Your items";
  }
    


let products = JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
  let productsUI = products.map((item) => {
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

      <div class="price">$${item.price}</div>
      <a href="#" class="btn" onclick="removeItemFromCart(${item.id})">
        remove from cart
      </a>
      </div>
    
    `;
  }).join("");

  detailsItem.innerHTML = productsUI;
}
drawCartProductUI();

// Remove Product
function removeItemFromCart(id) {
  let productsInCart = localStorage.getItem("productsInCart");
  if (productsInCart) {
    let items = JSON.parse(productsInCart);
    let filteredItems = items.filter((item) => item.id !== id);
    localStorage.setItem("productsInCart", JSON.stringify(filteredItems));
    drawCartProductUI(filteredItems);
  }
}