let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let productId = JSON.parse(localStorage.getItem("editProduct"));
let getProduct = products.find((i) => i.id === productId);

let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productPrice = document.getElementById("product-price");
let inputFile = document.getElementById("upload-image");
let updateForm = document.getElementById("update-form");
let productCategorySelect = document.getElementById("product-category");
let productImage;
let productCategoryValue;

productName.value = getProduct.title;
productDesc.value = getProduct.desc;
productPrice.value = getProduct.price;
productCategorySelect.value = getProduct.category;
productImage = getProduct.imageUrl;


// Events 
productCategorySelect.addEventListener("change", getProductCategoryValue);
updateForm.addEventListener("submit", updateProductFun);
inputFile.addEventListener("change", uploadImage);


// Function
function getProductCategoryValue(e) {
  productCategoryValue = e.target.value;
}

function updateProductFun(e) {
  e.preventDefault();

  getProduct.title = productName.value;
  getProduct.desc = productDesc.value;
  getProduct.price = productPrice.value;
  getProduct.category = productCategorySelect.value;
  getProduct.imageUrl = productImage;

  localStorage.setItem("products", JSON.stringify(products));

  setTimeout(() => {
    window.location = "index.html";
  }, 500);
}

// Upload Image File
function uploadImage() {
  let file = this.files[0];
  let types = ["image/jpeg", "image/png"];

  if (types.indexOf(file.type) == -1) {
    alert("Type not Supported");
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    alert("Image not Exced 2MG");
    return;
  }

  getImageBase64(file);
}

function getImageBase64(file) {
  let reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function () {
    productImage = reader.result;
  }

  reader.onerror = function () {
    alert("Error !!");
  }
}