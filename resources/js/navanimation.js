var burger = document.getElementsByClassName('burger')[0];
var nav_cover = document.getElementsByClassName('nav-cover')[0];
var contact = document.querySelector('nav ul li:nth-of-type(4)');
var nav = document.querySelector("nav");
var active = true;
var element = document.getElementsByTagName('footer')[0];
var w = window.innerWidth;
burger.addEventListener("click", navopen);
contact.addEventListener("click", conscroll);

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
function conscroll(){
    console.log(w)
    if(w < 1100){
        navopen();
    }
    element.scrollIntoView();
}
