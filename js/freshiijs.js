let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle('fa-xmark');
    navBar.classList.toggle('active');
}