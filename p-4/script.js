document.addEventListener("DOMContentLoaded", function () {
    // Get the selected role from local storage
    var selectedRole = localStorage.getItem('selectedRole');

    // Fill the form field with the selected role if it exists
    if (selectedRole) {
        document.getElementById('role').value = selectedRole;
    }
});
function validateForm() {

    var usernameInput = document.getElementById('username');
    var emailInput = document.getElementById('email');
    var roleInput = document.getElementById('role');
    if (!usernameInput.checkValidity()) {
        alert('Please enter a valid username (2-20 characters).');
        return;
    }
    if (!emailInput.checkValidity()) {
        alert('Please enter a valid email address.');
        return;
    }
    if (roleInput.value && !roleInput.checkValidity()) {
        alert('Please enter a valid role (Peaceful or Aggressive).');
        return;
    }
    alert("Form submitted successfully! Thank you for your desire to help nature. We will contact you later.");

}