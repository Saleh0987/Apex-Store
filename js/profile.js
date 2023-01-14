let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");

let hideUser = document.getElementById("user");

hideUser.style.display = "none";

let products = JSON.parse(localStorage.getItem("products")) || productsDB;

let myProducts = products.filter((i) => i.isMe === "Y");

let userDom2 = document.getElementById("username");
let userEmailDom = document.getElementById("email");

userDom2.innerHTML = get_user;
userEmailDom.innerHTML = get_email;
let productsLength = document.querySelector("#productsLength span");

productsLength.innerHTML = myProducts.length;
