const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
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
        // Call the email verification endpoint after successful login
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



/* if (!isLoggedIn() && window.location.pathname !== "/index.html") {
    window.location.href = "index.html";
}  */