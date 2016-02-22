var c = document.getElementById("newcanvas");
var ctx = c.getContext("2d");
ctx.fillStyle="#00bfff";

var clear = function(e){
    e.preventDefault();
    ctx.clearRect(0,0,1000,500);
    prevX = -10;
    prevY = -10;
    ctx.beginPath();
}

var button = document.getElementById("clear");
button.addEventListener("click",clear);

var prevX;
var prevY;

var connectDots = function(e){
    e.preventDefault();

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(prevX, prevY, 10, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 10, 0, 2*Math.PI)
    ctx.fill();
    
    ctx.moveTo(e.offsetX,e.offsetY);
    prevX = e.offsetX;
    prevY = e.offsetY;
}


c.addEventListener("click",connectDots);
