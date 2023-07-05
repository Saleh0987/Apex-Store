let userInfo = document.querySelector("#user_info");
let nameDom = document.querySelector("#name");
let links = document.querySelector("#links");
let myProductsDom = document.querySelector("#my-products");
let logOutBtn = document.querySelector("#logout");
let logInBtn = document.querySelector("#logIn");


let username = localStorage.getItem("username");
if (username) {
  logInBtn.style.display = "none";
  userInfo.style.display = "block";
  nameDom.innerHTML = username;
  logOutBtn.style.display = "block";
} else {
  userInfo.style.display = "block";
  nameDom.style.display = "none";
  myProductsDom.style.display = "none";
  logOutBtn.style.display = "none"; 
}

logOutBtn.addEventListener("click", function () {
  localStorage.clear();

  setTimeout(() => {
    window.location = "index.html";
  }, 1500);
});

logInBtn.addEventListener("click", function () {
  setTimeout(() => {
    window.location = "login.html";
  }, 500);
});