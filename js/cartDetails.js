let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productId");
let detailsDom = document.getElementById("item-details");

let productDetails = products.find((item) => item.id == productId);

detailsDom.innerHTML =
`
          <div class="image">
            <img src=${productDetails.imageUrl} alt="">
          </div>

          <div class="content">
            <h3>${productDetails.title}</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <p class="avilab">Avilability: <span class="stock">${productDetails.stock}</span></p>
            <p class="brand">Brand: <span class="name-brand">${productDetails.brand}</span></p>
            <h4 class="price">$${productDetails.price}</h4>
            <p class="info">${productDetails.desc}</p>
          </div>

          <div class="inputBox">
            <button class="btn-details">Add to Cart</button>
            
            <button class="btn-details"">Add to Whishlist</button>
            
            <button onclick="editProduct(${productId})" 
            class="btn-details">Edit Product</button>

        </div>
`;

// Edit Function
function editProduct(id) {
  localStorage.setItem("editProduct", id);

  window.location = "editProduct.html";
}