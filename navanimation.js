var burger =document.getElementsByClassName('burger')[0];
var nav_cover =document.getElementsByClassName('nav-cover')[0];
var active = true;
burger.onclick = function(){
    console.log(nav_cover);
    if(active){
        nav_cover.style.animationName = "show";
        active = false;
    } else{
        nav_cover.style.animationName = "hide";
    }
};
