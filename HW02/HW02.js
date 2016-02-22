var c = document.getElementById("newcanvas");
var ctx = c.getContext("2d");
ctx.fillStyle="#00FF7F";

var radius = 0;
var expanding = true;

var drawCircle = function(e){
    ctx.clearRect(0,0,c.width,c.height);
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
    ctx.fill();

    if (radius == 0){
	expanding = true;
	radius += 1;
    }
    else if (radius == c.width/2){
	expanding = false;
	radius -= 1;
    }
    else if (expanding){
	radius += 1;
    }
    else{
	radius -= 1;
    }
    window.requestAnimationFrame(drawCircle);
}

var button = document.getElementById("start");
button.addEventListener("click",drawCircle);
