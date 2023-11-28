function redirectToSecondPage(role) {
    localStorage.setItem('selectedRole',role);
    window.location.href = '../p-4/index.html';
}