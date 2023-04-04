var gameState = "LEVEL3";

var  ball;
var ground, groundImage;
var heart,halfHeart;
var Targate;


var cloudsGroup, cloudImage;

var score=200;

var gameOver, restart;


function preload(){
  ballImg =   loadImage("ball.png");
  dotImg = loadImage("dot.jpg");
  
  groundImg = loadImage("ground.jpg");
  goalImg = loadImage("goal.png")
  
  player1Img = loadAnimation("1.gif","2.gif","3.gif","4.gif","5.gif","6.gif","7.gif");
  player2Img = loadAnimation("1l.gif","2l.gif","3l.gif","4l.gif","5l.gif","6l.gif","7l.gif","8l.gif","9l.gif","10l.gif");

  heartImg = loadImage("heart.png");
  
  TargateImg = loadImage("Targate.png");
  
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(800, 600);
  
   
  ground = createSprite(400,300,400,20);
  ground.addImage("ground",groundImg);
  ground.scale=2.0

  ball = createSprite(397,520,20,50);
  ball.addImage(ballImg);
  ball.scale = 0.1;

  goal = createSprite(397,160,20,50);
  goal.addImage(goalImg);
  goal.scale = 0.375;
  goal.setCollider("rectangle",0,0,950,450)

  heart1 = createSprite(100,57,20,20);
  heart1.addImage(heartImg);
  heart1.scale = 0.06;

  heart2 = createSprite(130,57,20,20);
  heart2.addImage(heartImg);
  heart2.scale = 0.06;

  heart3 = createSprite(160,57,20,20);
  heart3.addImage(heartImg);
  heart3.scale = 0.06;

  Targate = createSprite(260,160,20,20);
  Targate.addImage(TargateImg);
  Targate.scale = 0.13
  
  player1 = createSprite(260,280);
  player1.addAnimation("runright",player1Img)
  player1.addAnimation("runleft",player2Img)
  player1.scale=0.4
  player1.visible=false
  player1.setCollider("rectangle",0,0,200,300)
  //player1.debug = true

  gameOver = createSprite(400,300);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(400,350);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;

 
}

function draw() {
  background(255);
  text("GOAL: "+ score, 300,30);
  text(gameState, 380,30);

  if (gameState==="LEVEL1"){
    Targate.x =260
    Targate.y = 160
    Targate.velocityX=0;
    if(keyDown(UP_ARROW)) {
      ball.velocityY = -10;
    }
    if(keyDown(RIGHT_ARROW)) {
      ball.x = ball.x+5;
    }
    if(keyDown(LEFT_ARROW)) {
      ball.x = ball.x-5;
    }
   if(ball.isTouching(Targate)){
    score = score + 50;
    ball.x = 397
    ball.y = 520
    ball.velocityY=0
   }
   else if(ball.y<Targate.y){
    if(heart3.visible==true){
      heart3.visible = false
      ball.x = 397
      ball.y = 520
      ball.velocityY=0
    }
    else if(heart3.visible== false && heart2.visible==true){
      heart2.visible = false
      ball.x = 397
      ball.y = 520
      ball.velocityY=0
    }
    else if(heart2.visible== false && heart1.visible==true){
      heart1.visible = false
      gameState = "END"
     }
    }
   if(score==100){
    ball.x = 397
    ball.y = 520
    ball.velocityY=0
    heart1.visible=true;
    heart2.visible=true;
    heart3.visible=true;
    gameState = "LEVEL2"
   }
    
  }
  else if (gameState === "LEVEL2") {
   
    if(Targate.x>=520){
    Targate.velocityX= -3;
    }
    if(Targate.x<=260){
      Targate.velocityX= 3;
      }
    if(keyDown(UP_ARROW)) {
      ball.velocityY = -10;
    }
    if(keyDown(RIGHT_ARROW)) {
      ball.x = ball.x+5;
    }
    if(keyDown(LEFT_ARROW)) {
      ball.x = ball.x-5;
    }
    if(ball.isTouching(Targate)){
      score = score + 50;
      ball.x = 397
      ball.y = 520
      ball.velocityY=0
     }
     else if(ball.y<Targate.y){
      if(heart3.visible==true){
        heart3.visible = false
        ball.x = 397
        ball.y = 520
        ball.velocityY=0
      }
      else if(heart3.visible== false && heart2.visible==true){
        heart2.visible = false
        ball.x = 397
        ball.y = 520
        ball.velocityY=0
      }
      else if(heart2.visible== false && heart1.visible==true){
        heart1.visible = false
        gameState = "END"
      }
   
     }
     if(score>=200){
      ball.x = 397
    ball.y = 520
    ball.velocityY=0
    heart1.visible=true;
    heart2.visible=true;
    heart3.visible=true;
      gameState = "LEVEL3"
     }
    
  }
  else if (gameState === "LEVEL3") {
    player1.visible=true;
    if(Targate.x>=520){
    Targate.velocityX= -2;
    }
    if(Targate.x<=260){
      Targate.velocityX= 2;
      }

      if(player1.x>=520){
        player1.changeAnimation("runleft")
        player1.velocityX= -5;
        }
        if(player1.x<=260){
          player1.changeAnimation("runright")
          player1.velocityX= 5;
          }
    if(keyDown(UP_ARROW)) {
      ball.velocityY = -10;
    }
    if(keyDown(RIGHT_ARROW)) {
      ball.x = ball.x+5;
    }
    if(keyDown(LEFT_ARROW)) {
      ball.x = ball.x-5;
    }

    if(ball.isTouching(Targate)){
      score = score + 50;
      ball.x = 397
      ball.y = 520
      ball.velocityY=0
     }
     else if(ball.y<Targate.y ||ball.isTouching(player1)){
      if(heart3.visible==true){
        heart3.visible = false
        ball.x = 397
        ball.y = 520
        ball.velocityY=0
      }
      else if(heart3.visible== false && heart2.visible==true){
        heart2.visible = false
        ball.x = 397
        ball.y = 520
        ball.velocityY=0
      }
      else if(heart2.visible== false && heart1.visible==true){
        heart1.visible = false
        gameState = "END"
      }
    
    
     }
     if(score>=300){
      ball.x = 397
    ball.y = 520
    ball.velocityY=0
    heart1.visible=true;
    heart2.visible=true;
    heart3.visible=true;
    gameState = "LEVEL4"
     }
    
  }
  else if (gameState === "LEVEL4") {
    
    if(Targate.x>=520){
    Targate.velocityX= -2;
    }
    if(Targate.x<=260){
      Targate.velocityX= 2;
      }

      if(player1.x>=520){
        player1.changeAnimation("runleft")
        player1.velocityX= -5;
        }
        if(player1.x<=260){
          player1.changeAnimation("runright")
          player1.velocityX= 5;
          }
    if(keyDown(UP_ARROW)) {
      ball.velocityY = -10;
    }
    if(keyDown(RIGHT_ARROW)) {
      ball.x = ball.x+5;
    }
    if(keyDown(LEFT_ARROW)) {
      ball.x = ball.x-5;
    }
    if(ball.isTouching(Targate)){
      score = score + 50;
      ball.x = 397
      ball.y = 520
      ball.velocityY=0
     }
     else if(ball.y<Targate.y || ball.isTouching(player1)){
      if(heart3.visible==true){
        heart3.visible = false
        ball.x = 397
        ball.y = 520
        ball.velocityY=0
      }
      else if(heart3.visible== false && heart2.visible==true){
        heart2.visible = false
        ball.x = 397
        ball.y = 520
        ball.velocityY=0
      }
      else if(heart2.visible== false && heart1.visible==true){
        heart1.visible = false
        gameState = "END"
      }
    
    
     }
     if(score==500){
        gameState = "WIN"
      
     }
  }
  else if (gameState === "END") {
    ball.visible =false;
    ground.visible=false;
    goal.visible=false;
    Targate.visible=false;
    player1.visible=false;
    gameOver.visible = true;
    restart.visible = true;
    
    if(mousePressedOver(restart)) {
      reset();
    }
  }
    else if (gameState === "WIN") {
      background("teal")
      textSize(40)
      fill("black")
      text("YOU WON!!!",300,250 )
       ball.visible =false;
      ground.visible=false;
      goal.visible=false;
      Targate.visible=false;
      player1.visible=false;
      restart.visible = true;
     if(mousePressedOver(restart)) {
        reset();
      }
  }
  
  
  drawSprites();
}


function reset(){
  gameState = "LEVEL1";
  ball.x = 397
  ball.y = 520
  ball.velocityY=0
  ball.visible =true;
  ground.visible=true;
  goal.visible=true;
  Targate.visible=true;
  gameOver.visible = false;
  restart.visible = false;
  heart1.visible=true;
  heart2.visible=true;
  heart3.visible=true;
  score = 0;
}



