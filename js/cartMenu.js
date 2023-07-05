let cartProductDivDom = document.querySelector('.carts-products div');
let badgeDom = document.querySelector(".badge");
let cartProductMenu = document.querySelector('.carts-products');
let shoppingCartIcon = document.querySelector(".shopping-cart");

// Function open cart
shoppingCartIcon.addEventListener("click", OpenCartMenu);

// Check if there is item in localstorage
let addedItem = localStorage.getItem("productsInCart") ?
  JSON.parse(localStorage.getItem("productsInCart")) : [];

// Cart view product
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
        <button class="remove" onclick="removeItemFromCart(${item.id})">
        remove from cart
        </button>
        </div>
      </div>`;
  });
  // update the badge with the number of items in the cart
  badgeDom.style.display = "block";
  badgeDom.innerHTML = addedItem.length;
}

// Add event listener for the "remove from cart" button
cartProductDivDom.addEventListener("click", function(event) {
  if (event.target.classList.contains("remove")) {
    let itemId = event.target.parentNode.parentNode.querySelector(".user-info h3").textContent;
    removeItemFromCart(itemId);
  }
});

// Open Cart Menu
function OpenCartMenu() {
  if (addedItem.length > 0) {
    if (cartProductMenu.style.display == "block") {
      cartProductMenu.style.display = "none";
    } else {
      cartProductMenu.style.display = "block";
    }
  }
}

function removeItemFromCart(id) {
  let productsInCart = localStorage.getItem("productsInCart");
  if (productsInCart) {
    let items = JSON.parse(productsInCart);
    let filteredItems = items.filter((item) => item.id !== id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("productsInCart", JSON.stringify(filteredItems));
        addedItem = filteredItems;
        // redraw the cart UI with the updated cart items
        cartProductDivDom.innerHTML = "";
        addedItem.forEach((item) => {
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
                <button class="remove" onclick="removeItemFromCart(${item.id})">
                  remove from cart
                </button>
              </div>
            </div>`;
        });
        // update the badge with the new number of items in the cart
        badgeDom.innerHTML = filteredItems.length;
        // hide the cart menu if the last item is removed
        if (filteredItems.length === 0) {
          addedItem = [];
          cartProductMenu.style.display = "none";
        }
        Swal.fire("Removed!", "The item has been removed from your cart.", "success");
      }
    });
  }
}