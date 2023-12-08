const canvas = document.querySelector("#game-container");

canvas.width = innerWidth;
canvas.height = innerHeight;

let ctx = canvas.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 200, 0);

ctx.fillStyle = "red";
ctx.fillRect(20, 20, 75, 50);

//Turn transparency on
ctx.globalAlpha = 0.2;
ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 75, 50);
ctx.fillStyle = "green";
ctx.fillRect(80, 80, 75, 50);

ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

// Cercle
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
// Rectangle
ctx.beginPath();
ctx.rect(20, 20, 150, 100);
ctx.stroke();
// Curves
ctx.beginPath();
ctx.arc(100, 50, 50, 0, Math.PI);
ctx.stroke();

// Define a new Path:
ctx.beginPath();

// Define a start Point
ctx.moveTo(0, 0);

// Define an end Point
ctx.lineTo(200, 100);

// Stroke it (Do the Drawing)
ctx.stroke();

ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(100,20);
ctx.lineTo(175,100);
ctx.lineTo(20,100);
ctx.lineTo(20,20);
ctx.stroke();


// Create gradient
// const grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);

// strokeText()
ctx.font = "30px Arial";
ctx.strokeText("Hello World", 10, 50);

ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("Hello World", canvas.width/2, canvas.height/2);

// Image
const img = document.querySelector("img");
ctx.drawImage(img, 10, 10);

let radius = canvas.height / 2;
function drawClock() {
    ctx.arc(0, 0, radius, 0 , 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
}