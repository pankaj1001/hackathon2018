var canvas = document.getElementById('canvas');
//console.log(typeof(canvas));
if(canvas.getContext){
  var ctx = canvas.getContext('2d');
  //console.log("Context Done!");
}
else{
  console.log("Error in canvas Context.");
}
//Ball Object
var ball = {
  x:100,
  y:100,
  radius:10,
  vx:4,
  vy:2,
  color:'blue',
  draw:function () {
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};
//slider Object
var slider = {
  x:200,
  y:20,
  vx:15,
  color:'green',
  draw:function () {
    ctx.beginPath();
    ctx.fillStyle=this.color;
    ctx.fillRect(canvas.width-this.x,canvas.height-this.y,200,20);
    ctx.closePath();
    ctx.fill();
  }
};
//console.log(typeof(slider));

//Draw and move slider
//Draw and move the Ball

function draw() {
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ball.draw();
  slider.draw();
  ball.x+=ball.vx;
  ball.y+=ball.vy;
  if (ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  };
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  };
  if(((ball.x - (canvas.width-slider.x)) > 0)  & ((ball.x - (canvas.width-slider.x)) < 200)){
    if(((canvas.height - ball.y) < 30) & (ball.y<300)){
      //console.log(canvas.height - ball.y);
      ball.vy = -ball.vy;
    }
  };
  raf =window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover',function (event) {
  raf=window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout',function () {
  window.cancelAnimationFrame(raf);
});

//detect key
var space=400;
function keydown(event) {
  console.log(event.keyCode);
  switch(event.keyCode){
    case 37:
      leftArrow();break;

    case 39:
      rightArrow();break;
  }
}
function leftArrow() {
  if(space > 0){
    space-=slider.vx;
    slider.x+=slider.vx;
  }
}
function rightArrow() {
  if(space < 400){
    space+=slider.vx;
    slider.x-=slider.vx;
  }
}
ball.draw();
slider.draw();
