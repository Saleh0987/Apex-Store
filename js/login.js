let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign_in");

let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

loginBtn.addEventListener("click", login);

function login(e) {
  e.preventDefault();

  if (username.value === "" || password.value === ""){
        
    Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
    
  } else { if (
      getUser &&
      getUser.trim() === username.value.trim() &&
      getPassword &&
      getPassword === password.value)
  {
    
    setTimeout(() => {
      window.location = "index.html";
    }, 1100);
    
  } else {

  Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
  footer: '<a href="">Why do I have this issue?</a>'
})
    }
  }
}
