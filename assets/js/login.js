const container10 = document.getElementById('container10');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container10.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container10.classList.remove("active");
});