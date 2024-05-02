  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
  })

    // Example of sending login credentials to a backend API using fetch
    fetch("http://saraha-gilt.vercel.app/auth/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Invalid username or password");
        }
        return response.json();
    })
    .then(data => {
        alert("Login successful");
        console.log(data.token);
        console.log("Login successful:", data);
       //window.location.href = "landing.html";
    })
    .catch(error => {
       alert("Invalid username or password");
        document.getElementById("error-message").innerText = error.message;
    });
});
//! <API> 
/// API
 document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById("signupForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("signupUsername").value;
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById("signupConfirmPassword").value;
        const email = document.getElementById("signupEmail").value;
        const gender = document.getElementById("signupGander").value;
    
        signupUser(username, password, confirmPassword, email, gender);
    });
    
 })
 function signupUser(username, password, confirmPassword, name, gender) {
        
    const apiUrl = "https://saraha-gilt.vercel.app/auth/signup";

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password, confirmPassword, name, gender })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Signup failed");
        }
        return response.json();
    })
    .then(data => {
        console.log("Signup successful");
        document.getElementById("error").textContent = "Signup successful!";
    })
    .then(() => {
        window.location.href = "login.html";
    })
    .catch(error => {
        console.error("Signup failed:", error.message);
        alert("Have an Error : " + error.message);
        document.getElementById("error").textContent = error.message;
    });
}
function login(username, password) {
    
}
function logout(params) {
    
}
function register(userName, email, password, cPassword, gender) {
   
}