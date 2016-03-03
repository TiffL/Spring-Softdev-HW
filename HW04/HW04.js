var pic = document.getElementById("svgimg");
var dvdimg = document.getElementById("dvdlogo");

var id;
var logoWidth = 120;
var logoHeight = 72;
var picWidth = 450;
var picHeight = 450;

var clear = function(){
    clearInterval(id);
    while (pic.childElementCount > 0){
	pic.removeChild(pic.children[0]);
    }
};

var circleAnimation = function(){

    var radius = 0;
    var expanding = true;

    var drawCircle = function(){
	while (pic.childElementCount > 0){
	    pic.removeChild(pic.children[0]);
	}

	var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
	c.setAttribute("cx",picWidth/2);
	c.setAttribute("cy",picHeight/2);
	c.setAttribute("r",radius);
	c.setAttribute("fill","pink");
	pic.appendChild(c);

	if (radius == 0){
	    expanding = true;
	    radius += 1;
	}
	else if (radius == picWidth/2){
	    expanding = false;
	    radius -= 1;
	}
	else if (expanding){
	    radius += 1;
	}
	else{
	    radius -= 1;
	}
    };
    id = window.setInterval(drawCircle,10);
};

var dvdAnimation = function(){

    var currentX  = (picWidth-logoWidth)/2;
    var currentY  = (picHeight-logoHeight)/2;
    var deltaX = 1;
    var deltaY = 1;

    var bounce = function(){
	while (pic.childElementCount > 0){
	    pic.removeChild(pic.children[0]);
	}

	var logo = document.createElementNS("http://www.w3.org/2000/svg","rect");
	logo.setAttribute("x",currentX);
	logo.setAttribute("y",currentY);
	logo.setAttribute("width",logoWidth);
	logo.setAttribute("height",logoHeight);
	pic.appendChild(logo);

	if (currentX == 0)
	    deltaX = 1;
	else if (currentX == picWidth-logoWidth)
	    deltaX = -1;
	else if (currentY == 0)
	    deltaY = 1;
	else if (currentY == picHeight-logoHeight)
	    deltaY = -1;

	currentX += deltaX;
	currentY += deltaY;
    };

    id = window.setInterval(bounce,10);
};

var s1button = document.getElementById("startCircle");
s1button.addEventListener("click",circleAnimation);

var s2button = document.getElementById("startDVD");
s2button.addEventListener("click",dvdAnimation);

var cbutton = document.getElementById("clear");
cbutton.addEventListener("click",clear);
