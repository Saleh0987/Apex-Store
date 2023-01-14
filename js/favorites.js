let detailsItem = document.getElementById("Details");
let noProductsDom = document.getElementById("noItem");


function drawFavoritesProductUI(allProducts = []) {

  // check item or no 
  if (JSON.parse(localStorage.getItem("productsFavorite")).length === 0) {
    
    noProductsDom.innerHTML = "no items here";

  } else {
    noProductsDom.innerHTML = "Your Favorite items";
  }
    


let products = JSON.parse(localStorage.getItem("productsFavorite")) || allProducts;
  let productsUI = products.map((item) => {
    return `
    <div class="whish-list">

      <div class="image">
        <img src=${item.imageUrl}>
      </div>

      <div class="content">
        <h2 class="title">
        ${item.title}
        </h2>
        <p class="avilb">
          Avilability: <span class="stock">In Stock</span>
        </p>
      </div>

      <div class="price">$${item.price}</div>
      <a class="btn" onclick="removeItemFromCart(${item.id})">
        remove from favorites
      </a>
      </div>
    
    `;
  }).join("");

  detailsItem.innerHTML = productsUI;
}
drawFavoritesProductUI();

// Remover Product
function removeItemFromCart(id) {
  let productsFavorite = localStorage.getItem("productsFavorite");
  if (productsFavorite) {
    let items = JSON.parse(productsFavorite);
    let filteredItems = items.filter((item) => item.id !== id);
    localStorage.setItem("productsFavorite", JSON.stringify(filteredItems));
    drawFavoritesProductUI(filteredItems);
  }
}