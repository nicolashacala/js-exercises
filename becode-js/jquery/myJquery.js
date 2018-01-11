var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var canonHeight = 40;
var canonWidth = 40;
var canonX = (canvas.width-canonWidth)/2;
var rightPressed = false;
var leftPressed = false;
var launchBall = false;
var ballX = canonX;
var ballY = canvas.height-canonHeight+10;
var ballTraject = [];
var targetAlex = new Image();
targetAlex.src = '393415.jpeg';
var targetEmily = new Image();
targetEmily.src = '18309559.png';
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);


targetAlex.addEventListener('load',function(){

})

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        canonX = relativeX - canonWidth/2;
    }
}

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    else if(e.keyCode == 32) {
    	launchBall = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}


function drawCanon(){
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.arc(canonX,500,40,3.15,2*Math.PI);
	ctx.closePath();
	ctx.stroke();

	ctx.fillStyle = 'black';
	ctx.fill();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, 30, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawTarget(){

}

function draw(){
	ctx.clearRect(0,0, canvas.width, canvas.height);
	drawBall();
	drawCanon();

	if(rightPressed && canonX < canvas.width-canonWidth) {
	    canonX += 10;
	    ballX += 10;
	}
	else if(leftPressed && canonX > canonWidth) {
	    canonX -= 10;
	    ballX -= 10;
	}

	if(launchBall && ballY == canvas.height-canonHeight+10){
		ballTraject[0] = canonX;
	}

	if(launchBall && ballY > 0){
		ballY -= 10;
		ballX = ballTraject[0];
	}
	else{
		launchBall = false;
		ballY = canvas.height-canonHeight+10;
		ballX = canonX;

	}


	requestAnimationFrame(draw);
}

draw();