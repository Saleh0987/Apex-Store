let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productPrice = document.getElementById("product-price");
let inputFile = document.getElementById("upload-image");
let createForm = document.getElementById("create-form");
let productCategorySelect = document.getElementById("product-category");
let productImage;
let productCategoryValue;
// Events 
createForm.addEventListener("submit", createProductFun);
inputFile.addEventListener("change", uploadImage);


// Function
productCategorySelect.addEventListener("change", getProductCategoryValue);
function getProductCategoryValue(e) {
  productCategoryValue = e.target.value;
}

function createProductFun(e) {
  e.preventDefault();
  let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;
  let nameValue = productName.value;
  let descValue = productDesc.value;
  let priceValue = productPrice.value;

  if (nameValue && descValue && priceValue) {
    let obj = {
      id: allProducts ? allProducts.length + 1 : 1,
      qty: 1,
      imageUrl: productImage,
      price: priceValue,
      category: productCategoryValue,
      title: nameValue,
      desc: descValue,
      isMe: "Y",
    };

    let newProducts = allProducts ? [...allProducts, obj] : [obj];
    localStorage.setItem("products", JSON.stringify(newProducts));
  
    productName.value = "";
    productDesc.value = "";
    productPrice.value = "";
    productCategoryValue.value = "";
    
    setTimeout(() => {
      window.location = "index.html";
    })

  } else {
    alert("Please Fill Data");
  }
  
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