var scr, active = false;
var imgview = document.querySelector('.image-view-container');
var imgcon = document.querySelectorAll('.img-container .img img');
var img = document.querySelector('.img-view img');
var cross = document.querySelector('.cross img');

cross.addEventListener('click', seen);

imgcon.forEach(element => {
    element.addEventListener('click', function(e) {
        imgview.style = 'display:block';
        active = true;
        e = e || window.event;
        var target = e.target;
        src = target.getAttribute('src');
        img.setAttribute('src', src)
        console.log(active, cross);
    }, false);
});

function seen(){
    if(active){
        imgview.style = 'display:none';
        active = false;
    } else{
        imgview.style = 'display:block';
        active = true;
    }
}
