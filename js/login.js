let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign_in");

let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

loginBtn.addEventListener("click", login);

function login(e) {
  e.preventDefault();

  if (username.value === "" || password.value === ""){
        
    alert('Something went wrong')
    
  } else { 
    if (
      getUser &&
      getUser.trim() === username.value.trim() &&
      getPassword &&
      getPassword === password.value)
    {
    
    alert('Login successful!')


      setTimeout(() => {
        window.location = "home.html";
      }, 1100);
    
    } else {
    alert('Invalid username or password!')

    }
  }
}
