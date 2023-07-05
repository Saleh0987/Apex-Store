let productsDom = document.getElementById("MenuItem");
let productsDB = [
    {
    id: 1,
    title: "Men's Jacket",
    desc: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Blanditiis, Veniam?",
    price: 12.99,
    imageUrl: "images/jacket-1.jpg",
    stock: "in Stock",
    brand: "ZARA",
    category: "Jacket",
    isMe: "N",
    qty: 1,
    
  },
  {
    id: 2,
    title: "Wall Clock",
    desc: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Blanditiis, Veniam?",
    price: 12.99,
    imageUrl: "images/watch-3.jpg",
    stock: "in Stock",
    brand: "RADO",
    category: "Watches",
    isMe: "N",
    qty: 1,
    
  },
  {
    id: 3,
    title: "Boot shoe",
    desc: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Blanditiis, Veniam?",
    price: 12.99,
    imageUrl: "images/shoe-5.jpg",
    stock: "Last Stock",
    brand: "CAT",
    category: "Shoes",
    isMe: "N",
    qty: 1,
    
  },
  {
    id: 4,
    title: "Summer Short",
    desc: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Blanditiis, Veniam?",
    price: 12.99,
    imageUrl: "images/shorts-1.jpg",
    stock: "in Stock",
    brand: "ADIDAS",
    category: "Clothes",
    isMe: "N",
    qty: 1,
    
  },
  {
    id: 5,
    title: "Sports Shoe",
    desc: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Blanditiis, Veniam?",
    price: 12.99,
    imageUrl: "images/sports-6.jpg",
    stock: "Last Stock",
    brand: "NIKE",
    category: "Shoes",
    isMe: "N",
    qty: 1,
    
  },
  {
    id: 6,
    title: "Winter Jacket",
    desc: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Blanditiis, Veniam?",
    price: 12.99,
    imageUrl: "images/jacket-6.jpg",
    stock: "Last Stock",
    brand: "OR",
    category: "Jacket",
    isMe: "N",
    qty: 1,
    
  },
  {
    id: 7,
    title: "Perfume Women",
    desc: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Blanditiis, Veniam?",
    price: 12.99,
    imageUrl: "images/perfume.jpg",
    stock: "Last Stock",
    brand: "DIOR",
    category: "Accessories",
    isMe: "N",
    qty: 1,
    
  },
  {
    id: 8,
    title: "Bkue Shirt",
    desc: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Blanditiis, Veniam?",
    price: 12.99,
    imageUrl: "images/shirt-1.jpg",
    stock: "in Stock",
    brand: "LC Wikiki",
    category: "Clothes",
    isMe: "N",
    qty: 1,
    
  },
  {
    id: 9,
    title: "Apple Watch",
    desc: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Blanditiis, Veniam?",
    price: 12.99,
    imageUrl: "images/watch-2.jpg",
    stock: "in Stock",
    brand: "Apple",
    category: "Watches",
    isMe: "N",
    qty: 1,
    
  },
  {
    id: 10,
    title: "Apple Watch",
    desc: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Blanditiis, Veniam?",
    price: 12.99,
    imageUrl: "images/watch-2.jpg",
    stock: "in Stock",
    brand: "Apple",
    category: "Accessories",
    isMe: "N",
    qty: 1,
    
  },
]


// 
let drawProductUI;
(drawProductUI = function(products = []) {
  let productsUi = products.map((item) => {
    return `
          <div class="box" style="border: ${item.isMe === "Y" ? "1px solid green" : ""}"">
        <div class="image">
        <img src=${item.imageUrl} alt="">
        <a class="fas fa-heart"
        style="color: ${item.liked == true ? "red" : ""}"
        onclick="addedToFavorite(${item.id})"></a>
        </div>
        <div class="content">
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <button onclick="saveItemData(${item.id})">${item.title}</button>
        <p>${item.desc}</p>
        
        <span class="price">$${item.price}</span>
        
        <button class="btn"
        onclick="addedToCart(${item.id})">add to cart</button>

      ${item.isMe === "Y" ? "<button class='btn edit' onclick = 'editProduct(" +item.id +")' > Edit Product</button >" : ""}

        </div>
      </div>   
    `;
  }).join("");

  productsDom.innerHTML = productsUi;
})(JSON.parse(localStorage.getItem("products")) || productsDB);


// Add To Cart;
function addedToCart(id) {
  if (localStorage.getItem("username")) {
    let products = JSON.parse(localStorage.getItem("products")) || productsDB;
    let product = products.find((item) => item.id === id);
    
    // remove repeat item in cart
    let isProductInCart = addedItem.some((i) => i.id === product.id);
    if (isProductInCart) {
      addedItem = addedItem.map(p => {
        if (p.id === product.id) p.qty += 1;
        return p;
      })
    } else {
      addedItem.push(product);
      
      alert("Item added to cart");
    }

    cartProductDivDom.innerHTML = "";
    addedItem.forEach(item => {
      cartProductDivDom.innerHTML +=
        `<div class="info">
          <div class="img-info">
            <img src=${item.imageUrl} alt="">
          </div>
        <div class="user-info">
          <h3>${item.title}</h3>
          <span class="qty">Quantity (${item.qty})</span>
          <span class="price">$${item.price}</span>
        </div>
        <div class="remov-cart">
          <button class="remove">Remove from cart</button>
        </div>
      </div>`;
  
    })
    
    // Save item in local storag
    localStorage.setItem("productsInCart",
      JSON.stringify(addedItem));

    // Add counter of items
  let cartProductItem = document.querySelectorAll(".item .info");
  badgeDom.style.display = "block";
  badgeDom.innerHTML = cartProductItem.length;
  } else {
    window.location = "login.html";
  }
  
}

// unique function
function getUniqueArr(arr, filterType) {
  let unique = arr
    .map((item) => item[filterType])
    .map((item, i, final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);
  return unique;
}

// Save id item in localstorage 
function saveItemData(id) {
  localStorage.setItem("productId", id);
  window.location = "cartDetails.html";
}

// Search item
let input = document.getElementById("item-search");
input.addEventListener("keyup", function (e) {
    search(e.target.value, JSON.parse(localStorage.getItem("products")));

  if (e.target.value.trim() === "") {
    drawProductUI(JSON.parse(localStorage.getItem("products")));
  }
});

function search(title, myArray) {
  let arr = myArray.filter((item) => item.title.toLowerCase()
    .indexOf(title.toLowerCase()) !== -1);
  drawProductUI(arr);
}

// Add To Favorite
let favoritesItems = localStorage.getItem("productsFavorite") ?
  JSON.parse(localStorage.getItem("productsFavorite")) : [];
function addedToFavorite(id) {
  if (localStorage.getItem("username")) {
    let choosenItem = productsDB.find((item) => item.id === id);
    choosenItem.liked = true;
    favoritesItems = [...favoritesItems, choosenItem]; 
    let uniqueProducts = getUniqueArr(favoritesItems, "id");
    localStorage.setItem("productsFavorite", JSON.stringify(uniqueProducts));
    productsDB.map(item => {
      if (item.id === choosenItem.id) {
        item.liked = true;
      }
    })
    localStorage.setItem("products", JSON.stringify(productsDB));
    drawProductUI(productsDB);
  } else {
    window.location = "login.html";
  }
}

// Filter Products by Category
let categoryFilter = document.getElementById("category-filter");

categoryFilter.addEventListener("change", getProductsFilterByCategory);

function getProductsFilterByCategory(e) {
  let val = e.target.value;

  let products = JSON.parse(localStorage.getItem("products")) || productsDB;

  if (val === "all") {
    drawProductUI(products);
  } else {
    products = products.filter((i) => i.category == val);
    drawProductUI(products);
  }
}

// Edit Function
function editProduct(id) {
  localStorage.setItem("editProduct", id);

  window.location = "editProduct.html";
}