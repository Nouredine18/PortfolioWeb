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

/* function checkLoggedIn() {
    if (isLoggedIn()) {
      // User is logged in, show the logged in content
      document.querySelector('.navbar').style.display = 'block';
    } else {
      // User is not logged in, hide the content
      document.querySelector('.navbar').style.display = 'none';
    }
  }

checkLoggedIn();  */
 
/* function checkLoggedIn() {
    if (!isLoggedIn()) {
        window.location.href = "index.html";
    }
}

checkLoggedIn();


 */

/*if (!isLoggedIn() && window.location.pathname !== "/index.html") {
    window.location.href = "index.html";
}  */
