var burger = document.getElementsByClassName('burger')[0];
var nav_cover = document.getElementsByClassName('nav-cover')[0];
var nav = document.querySelector("nav");
var active = true;

var w = window.innerWidth;
burger.addEventListener("click", navopen);

function navopen(){
    if(active){
        nav_cover.style.animationName = "show";
        nav.className = 'navon';
        console.log(contact);
        active = false;
    } else{
        nav_cover.style.animationName = "hide";
        nav.className = '';
        active = true;
    }
};
