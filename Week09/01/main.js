let username = document.getElementById("username")
let email = document.getElementById("email")
let password= document.getElementById("password")
let confirmPassword = document.getElementById("confirm-password")
let submitButton = document.getElementById('submit')
let message = document.querySelector('p')
submitButton.addEventListener("click", (e) => {    
    e.preventDefault()
    if (username.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "" ||
    confirmPassword.value.trim() === "") {
        message.textContent = "Missing some values, Please try again!";
        message.style.color = "red";
    } else if (password.value !== confirmPassword.value) {
        message.textContent = "Password and Confirm Password do not match.";
        message.style.color = "red";
    } else {
        message.textContent = "Your data is completed!";
        message.style.color = "green";
    }
})