var slide = document.querySelectorAll('.img-slide');
var box = document.querySelectorAll('.box div');
var rbtn = document.querySelector('.right-btn');
var lbtn = document.querySelector('.left-btn');
const p = slide.length;
var currentslide = 0, flag = true;

rbtn.addEventListener('click', next);
lbtn.addEventListener('click', previous);


function intervalManager(flag) {
    if(flag)
      intervalID =  setInterval(next,6000);
    else
      clearInterval(intervalID);
}
function next() {
    intervalManager(false);
    slide.forEach(element => {
        if(element!=slide[currentslide]){
            element.style = 'left:100%;z-index:1'
        }
    });
    box.forEach(element => {
        element.style = 'background-color:white'
    });
    if(currentslide===(p-1)){
        slide[currentslide].style = 'left:-100%;z-index:1';
        currentslide = 0;
        slide[currentslide].style = 'left:0;z-index:3';
    } else{
        slide[currentslide].style = 'left:-100%;z-index:1';
        slide[currentslide+1].style = 'left:0;z-index:3';
        currentslide++;
        if(currentslide==(p-1)){
            slide[0].style = 'left:100%;z-index:1'
        }
    }
    box[currentslide].style = 'background-color:#DC143C';
    intervalManager(true);
  }
  function previous() {
    intervalManager(false);
    slide.forEach(element => {
        if(element!=slide[currentslide]){
            element.style = 'left:-100%;z-index:1'
        }
    });
    box.forEach(element => {
        element.style = 'background-color:white'
    });
    if(currentslide===0){
        slide[currentslide].style = 'left:100%;z-index:1';
        slide[p-1].style = 'left:0;z-index:3';
        currentslide = p-1;
    } else{
        slide[currentslide].style = 'left:100%;z-index:1';
        slide[currentslide-1].style = 'left:0;z-index:3';
        currentslide--;
    }
    console.log(currentslide);
    box[currentslide].style = 'background-color:#DC143C';
    intervalManager(true);
  }

slide.forEach(element => {
    if(element!=slide[currentslide]){
        element.style = 'left:100%;z-index:1'
    }
});


box[0].addEventListener('click',()=>{
    intervalManager(false);
    box.forEach(element => {
        element.style = 'background-color:white'
    });
    console.log(slide[0].style.left=='100%');
        if(slide[0].style.left=='100%'){
            slide[currentslide].style = 'left:-100%;z-index:1';
            slide[0].style = 'left:0;z-index:3';
            currentslide = 0;
        } else if(slide[0].style.left=='-100%'){
            slide[currentslide].style = 'left:100%;z-index:1';
            slide[0].style = 'left:0;z-index:3';
            currentslide = 0;
        }
        box[currentslide].style = 'background-color:#DC143C';
        intervalManager(true);
});
box[1].addEventListener('click',()=>{
    intervalManager(false);
    box.forEach(element => {
        element.style = 'background-color:white'
    });
    console.log(slide[1].style.left=='100%');
        if(slide[1].style.left=='100%'){
            slide[currentslide].style = 'left:-100%;z-index:1';
            slide[1].style = 'left:0;z-index:3';
            currentslide = 1;
        } else if(slide[1].style.left=='-100%'){
            slide[currentslide].style = 'left:100%;z-index:1';
            slide[1].style = 'left:0;z-index:3';
            currentslide = 1;
        }
        box[currentslide].style = 'background-color:#DC143C';
        intervalManager(true);
});
box[2].addEventListener('click',()=>{
    intervalManager(false);
    box.forEach(element => {
        element.style = 'background-color:white'
    });
        if(slide[2].style.left=='100%'){
            slide[currentslide].style = 'left:-100%;z-index:1';
            slide[2].style = 'left:0;z-index:3';
            currentslide = 2;
        } else if(slide[2].style.left=='-100%'){
            slide[currentslide].style = 'left:100%;z-index:1';
            slide[2].style = 'left:0;z-index:3';
            currentslide = 2;
        }
        box[currentslide].style = 'background-color:#DC143C';
        intervalManager(true);
});
box[3].addEventListener('click',()=>{
    intervalManager(false);
    box.forEach(element => {
        element.style = 'background-color:white'
    });
        if(slide[3].style.left=='100%'){
            slide[currentslide].style = 'left:-100%;z-index:1';
            slide[3].style = 'left:0;z-index:3';
            currentslide = 3;
        } else if(slide[3].style.left=='-100%'){
            slide[currentslide].style = 'left:100%;z-index:1';
            slide[3].style = 'left:0;z-index:3';
            currentslide = 3;
        }
        box[currentslide].style = 'background-color:#DC143C';
        intervalManager(true);
});


intervalManager(true);

