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
var targetX = Math.floor(Math.random()*451);
var targetY = Math.floor(Math.random()* 201);
var randomNumber = Math.floor(Math.random()*2);
var targetAlex = new Image();
targetAlex.src = '393415.jpeg';
var targetEmily = new Image();
targetEmily.src = '18309559.png';
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);


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
	if(randomNumber == 0){
		ctx.drawImage(targetAlex, targetX, targetY);
	}
	else{
		ctx.drawImage(targetEmily, targetX, targetY);
	}
}

function collisionDetection(){
		if(targetX < ballX+30 && targetX+60 > ballX+30 && targetY+60 == ballY+30){
			targetX = Math.floor(Math.random()*451);
			targetY = Math.floor(Math.random()* 201);
			randomNumber = Math.floor(Math.random()*2);
			drawTarget();
		}
}

function draw(){
	ctx.clearRect(0,0, canvas.width, canvas.height);
	drawBall();
	drawCanon();
	collisionDetection();
	drawTarget();
	
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