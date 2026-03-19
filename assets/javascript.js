const button = document.getElementById("hamburger");
const menu = document.getElementById("menu");

button.addEventListener("click", function () {
    console.log('hamburger ativar')
    menu.classList.toggle("ativa");
});