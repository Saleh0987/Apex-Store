let userInfo = document.querySelector("#user_info");
let userDom = document.querySelector("#user");
let nameDom = document.querySelector("#name");
let links = document.querySelector("#links");
let myProductsDom = document.querySelector("#my-products");
let logOutBtn = document.querySelector("#logout");
let logInBtn = document.querySelector("#logIn");


let username = localStorage.getItem("username");
if (username) {
  logInBtn.style.display = "none";
  userInfo.style.display = "block";
  userDom.innerHTML = "Hello";
  nameDom.innerHTML = username;
} else {
  userInfo.style.display = "block";
  nameDom.style.display = "none";
  myProductsDom.style.display = "none";
  userDom.innerHTML = "Welcome";
  logOutBtn.style.display = "none";
}

logOutBtn.addEventListener("click", function () {
  localStorage.clear();

  setTimeout(() => {
    window.location = "register.html";
  }, 1500);
});

logInBtn.addEventListener("click", function () {
  setTimeout(() => {
    window.location = "login.html";
  }, 500);
});