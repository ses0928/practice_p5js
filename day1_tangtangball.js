function setup() {
  createCanvas(400, 400);
  x=random(30,370);
  y=random(30,370);
  limity=y;
  speed=5;
  
  going_up=0;
}

function mousePressed(){
  x=mouseX;
  y=mouseY;
  limity=y;
  ellipse(x,y,30,30);
}

function draw(){
  background(220);
  speed=map(y,limity,height,0.1,20); // 속도 변동 함수.

  stroke(0,0,0);          // 테두리 색 결정.
  colorMode(HSB,100);     // color mode
  t=map(mouseX,0,width,0,100,true);
  fill(t,100,100);
  
  if(y>370) ellipse(x,y,30+(30+y-height)/2,height-y);
  else ellipse(x,y,30,30);
  
  if(mouseIsPressed){going_up=0;}
  else{
    if (going_up==0){
      y=y+speed;
    } else {
      y=y-speed;
    }
  }
  
  if(y>height-10){
    going_up=1;
  }
  
  if(y<limity){
    going_up=0;
  }
}