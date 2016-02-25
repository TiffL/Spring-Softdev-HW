var c = document.getElementById("newcanvas");
var ctx = c.getContext("2d");

var img = document.getElementById("dvdlogo");
var frameid;

var animation = function(){

    var currentX  = (c.width-img.clientWidth)/2;
    var currentY  = (c.height-img.clientHeight)/2;
    var deltaX = 1;
    var deltaY = 1;

    var bounce = function(){
	ctx.clearRect(0,0, c.width, c.height);
	ctx.drawImage(img,currentX,currentY);

	if (currentX == 0)
	    deltaX = 1;
	else if (currentX == c.width-img.clientWidth)
	    deltaX = -1;
	else if (currentY == 0)
	    deltaY = 1;
	else if (currentY == c.height-img.clientHeight)
	    deltaY = -1;

	currentX += deltaX;
	currentY += deltaY;

	frameid = window.requestAnimationFrame(bounce);
    };

    bounce();
};

var stopBounce = function(){
    window.cancelAnimationFrame(frameid);
};

var button = document.getElementById("start");
button.addEventListener("click",animation);
var sbutton = document.getElementById("stop");
sbutton.addEventListener("click",stopBounce);
