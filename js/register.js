let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let registerBtn = document.querySelector("#sign_up");


registerBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault();

  if(username.value === "" || email.value === "" || password.value === ""){
    alert('Please Fill Data!')

  } else if (username.value.length < 8 || !/^[a-zA-Z\u0600-\u06FF\s\d\S]+$/.test(username.value)) {
    alert('Username must be at least 8 characters long and include both Arabic and English letters with spaces and any special characters!')
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    alert('Please enter a valid email address!')

  } else if (!/[a-z]/.test(password.value) || !/[A-Z]/.test(password.value) || !/\d/.test(password.value) || !/[^\w\s]/.test(password.value) || password.value.length < 10) {
    alert('Password must contain at least one uppercase letter, one lowercase letter, one symbol, and one digit, and be at least 10 characters long!')
  } else {
    localStorage.setItem('username', username.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    alert('Registration completed successfully')


    setTimeout(() => {
      window.location = "login.html";
    }, 1100);
  }
}