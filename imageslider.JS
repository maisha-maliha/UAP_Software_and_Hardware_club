const post = document.getElementsByClassName("post");
const b = document.querySelectorAll(".box div");
const p = post.length;
let i = 0;

setInterval(next, 2000);

function next() {
  if (i === 0) {
    post[i + 1].style = "left:100%;z-index:1";
    b[i + 1].style = "";
    
    post[p - 1].style = "left:-100%;z-index:1";
    b[p - 1].style = "";

    post[i].style = "left:0;z-index:3";
    b[i].style = "background-color:#0F52BA";
    i++;
  } else if (i > 0 && i < p - 1) {
    post[i - 1].style = "left:-100%;z-index:1";
    b[i - 1].style = "";

    post[i].style = "left:0;z-index:3";
    b[i].style = "background-color:#0F52BA";

    post[i + 1].style = "left:100%;z-index:1";
    b[i + 1].style = "";
    i++;
  } else if (i === p - 1) {
    post[i - 1].style = "left:-100%;z-index:1";
    b[i - 1].style = "";

    post[i].style = "left:0;z-index:3";
    b[i].style = "background-color:#0F52BA";

    i = 0;

    post[i].style = "left:100%;z-index:1";
    b[i].style = "";
  }
}
