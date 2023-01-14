let detailsItem = document.getElementById("Details");
let noProductsDom = document.getElementById("noItem");

let drawProductUI;
(drawProductUI = function (products = []) {
  let myProducts = products.filter((item) => item.isMe === "Y");
  if (myProducts.length != 0) {
    let productsUi = myProducts.map((item) => {
      return `
        <div class="box">
        <div class="image">
        <img src=${item.imageUrl} alt="">

        </div>
        <div class="content">
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <a onclick="saveItemData(${item.id})">${item.title}</a>
        <p>${item.desc}</p>
        
        <span class="price">$${item.price}</span>

        <button class='btn edit'
        onclick = 'editProduct(${item.id})' >
        Edit Product</button >
        <button class='btn'
        onclick = 'deleteProduct(${item.id})' >
        Delete Product</button >
        </div>
      </div>   
    `;
    }).join("");
    detailsItem.innerHTML = productsUi;
    noProductsDom.innerHTML = "Your Products";
  }
  else {
    noProductsDom.innerHTML = "No Products !!";
    setTimeout(() => {
      window.location = "index.html";
    }, 1000)
  }

})(JSON.parse(localStorage.getItem("products")) || productsDB);

// Edit Product
function editProduct(id) {
  localStorage.setItem("editProduct", id);
  window.location = "editProduct.html";
}

// Delete Product
function deleteProduct(id) {
  let products = JSON.parse(localStorage.getItem("products")) || productsDB;
  let myProducts = products.filter((item) => item.isMe === "Y");
  let filtered = myProducts.filter((i) => i.id !== id);
  let clickedItem = myProducts.find((i) => i.id === id);
  products = products.filter((i) => i.id !== clickedItem.id);
  localStorage.setItem("products", JSON.stringify(products));
  drawProductUI(filtered);
}
