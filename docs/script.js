document.addEventListener("DOMContentLoaded", function(event){
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');
  const navbg = document.querySelector('.nav-bg');

  menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
      navbg.classList.toggle('active');
  });

  let loginButton = document.querySelector('.hvr-grow');
  let loadingAnimation = document.querySelector('.button12');

  loginButton.addEventListener('click', () => {
    loginButton.classList.add('loading');
    loadingAnimation.classList.add('show');

    setTimeout(() => {
      loginButton.classList.remove('loading');
      loadingAnimation.classList.remove('show');
    }, 4000);
  });

  function openLoginPage() {
      document.querySelector(".reg").classList.remove("show-page");
      document.querySelector(".login").classList.add("show-page");
      document.getElementById("login-action").classList.add("show");
      document.getElementById("reg-action").classList.remove("show");
  }

  function openRegPage() {
      document.querySelector(".reg").classList.add("show-page");
      document.querySelector(".login").classList.remove("show-page");
      document.getElementById("reg-action").classList.add("show");
      document.getElementById("login-action").classList.remove("show");
  }

  function isLoggedIn() {
      return localStorage.getItem('isLoggedIn') === 'true';
  }

  function login(email, password) {
      if (email === "admin@gmail.com" && password === "admin") {
          localStorage.setItem('isLoggedIn', 'true');

          verifyEmail(email);
          window.location.href = "portfolio.html";
      } else {
          document.getElementById("errorMessage").textContent = "Invalid email or password.";
      }
  }

  function logout() {
      localStorage.removeItem('isLoggedIn');
      window.location.href = "index.html";
  }

  function updateLogoutButton() {
      var logoutButton = document.getElementById("logoutButton");
      if (isLoggedIn()) {
        logoutButton.style.display = "block";
      } else {
        logoutButton.style.display = "none";
      }
    }



  updateLogoutButton();

  document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      if (!email || !password) {
          document.getElementById("errorMessage").textContent = "Email and password are required.";
          return;
      }
      login(email, password);
      updateLogoutButton();
  });

  function mySubmit(obj) {
    var pwdObj = document.getElementById('pwd');
    var hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 1});
    hashObj.update(pwdObj.value);
    var hash = hashObj.getHash("HEX");
    pwdObj.value = hash;
    console.log("")
  }

  
  var myInput = document.getElementById("password");
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");

  // When the user clicks on the password field, show the message box
  myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }

  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }

  // When the user starts to type something inside the password field
  myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
    
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    
    // Validate length
    if(myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }  
});

