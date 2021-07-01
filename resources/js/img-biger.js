var imgcontainer = document.querySelectorAll('.img-container');

document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target ,
        text = target.textContent || target.innerText;
        console.log(text);
}, false);

