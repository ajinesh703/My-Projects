const validUsername = "admin";
const validPassword = "password123";

document.getElementById("loginForm").addEventListener("submit", function(event) {
   event.preventDefault();

   const username = document.getElementById("username").value;
   const password = document.getElementById("password").value;

   if (username === validUsername && password === validPassword) {
      alert("Login successfull");

   } else {
      const errorMessage = document.getElementById("errorMessage");
      errorMessage.textContent = "Invalid username or password";

      errorMessage.style.display = "block";

   }
});
