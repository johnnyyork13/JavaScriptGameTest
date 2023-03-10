var c = document.getElementById("mainCanvas");
var ctx = c.getContext("2d");

ctx.canvas.width = 500;
ctx.canvas.height = 500;

const square = {
    height: 25,
    width: 25,
    jumping: true,
    x: 0,
    y: 0,
    dx: 0,
    dy: 0
}

const controls = {
    left: false,
    right: false,
    up: false,

    keyListener: function (event) {
        let key_state = (event.type == "keydown") ? true : false;
        console.log(event.keyCode);
        switch (event.keyCode) {
            case 65:
                controls.left = key_state;
                break;
            case 32:
                controls.up = key_state;
                break;
            case 68:
                controls.right = key_state;
                break;
        }
    }
}

const loop = function() {

    if(controls.up && square.jumping == false) {
        square.dy -= 20;
        square.jumping = true;
    }

    if (controls.left) {
        square.dx -= 0.5;
    }

    if (controls.right) {
        square.dx += 0.5;
    }

    square.dy += 1.5;
    square.x += square.dx;
    square.y += square.dy;
    square.dx *= 0.9;
    square.dy *= 0.9;

    if (square.y > 450 - 20 - 50) {
        square.jumping = false;
        square.y = 450 - 20 - 50;
        square.dy = 0;
    }

    if (square.x < 0 - square.width) {
        square.x = 500;
    } else if (square.x > 500) {
        square.x = 0;
    }

    ctx.fillStyle = "rgb(255,255,255)"; //background
    ctx.fillRect(0,0,500,500);

    ctx.fillStyle = "rgb(0,0,0)"; //cube
    ctx.beginPath();
    ctx.rect(square.x, square.y, square.width, square.height);
    ctx.fill();

    ctx.strokeStyle = "black";
    ctx.lineWidth = 40;
    ctx.beginPath();
    ctx.moveTo(0, 425);
    ctx.lineTo(500, 425);
    ctx.stroke();

    window.addEventListener('keydown', controls.keyListener);
    window.addEventListener("keyup", controls.keyListener);

    window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);


















