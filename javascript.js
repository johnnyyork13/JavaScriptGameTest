canvasHeight = 500;
canvasWidth = 500;
playerWidth = 50;
playerHeight = 50;
x = 50;
y = 50;

var c = document.getElementById("mainCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(x, 50, playerWidth, playerHeight);
ctx.stroke();

c.addEventListener('click', move);


function move(){
    x += 1;
    ctx.rect(x, 50, playerWidth, playerHeight);
    ctx.stroke();
    console.log(x);
}