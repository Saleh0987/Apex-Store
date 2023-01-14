let cartProductDivDom = document.querySelector('.carts-products div');
let badgeDom = document.querySelector(".badge");
let cartProductMenu = document.querySelector('.carts-products');
let shoppingCartIcon = document.querySelector(".shopping-cart");


// Function open cart
shoppingCartIcon.addEventListener("click", OpenCartMenu);

// Check if there is item in localstorage
let addedItem = localStorage.getItem("productsInCart") ?
  JSON.parse(localStorage.getItem("productsInCart")) : [];

  // Cart veiw product
if (addedItem) {
  addedItem.map((item) => {
    cartProductDivDom.innerHTML += `
      <div class="info">
          <div class="img-info">
            <img src=${item.imageUrl} alt="">
          </div>
        <div class="user-info">
          <h3>${item.title}</h3>
          <span class="qty">Quantity (${item.qty})</span>
          <span class="price">$${item.price}</span>
        </div>
        <div class="remov-cart">
          <a href="#" class="remove">Remove from cart</a>
        </div>
      </div> `;
  });
  badgeDom.style.display = "block";
  badgeDom.innerHTML = addedItem.length;
}
  
// Open Cart Menu
function OpenCartMenu() {
  if (cartProductDivDom.innerHTML != "") {
    if (cartProductMenu.style.display == "block") {
      cartProductMenu.style.display = "none";
    } else {
      cartProductMenu.style.display = "block";      
    }  
  }
}