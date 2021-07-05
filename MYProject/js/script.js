
let menu = document.querySelector('#menu-bar');
let nav = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
}

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeout(){
    setInterval(loader , 3000);
}
window.onload = fadeout();