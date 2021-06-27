var burger = document.getElementsByClassName('burger')[0];
var nav_cover = document.getElementsByClassName('nav-cover')[0];
var nav = document.querySelector("nav");
var active = true;

burger.addEventListener("click", navopen);
function navopen(){
    console.log(nav_cover);
    if(active){
        nav_cover.style.animationName = "show";
        nav.className = 'navon';
        console.log(nav);
        active = false;
    } else{
        nav_cover.style.animationName = "hide";
        nav.className = '';
        active = true;
    }
};
