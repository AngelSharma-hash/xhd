var plane,planei,planed,planes,planea;
var enemyGroup;
var enemy;
var explosiona;
var bgs;
var gameState=1;


function setup() {
  createCanvas(800,400);

  plane = new Plane(200,200,20,10);

  enemyGroup = new Group();  

  enemy = new Plane(800,random(200,400),20,20);
  enemy.plane.velocityX=-6;
  enemy.plane.mirrorX(-1);

  //enemyGroup.add(enemy.plane);  


}

function preload(){
  planei = loadImage("i/tile000.png");
  planed = loadImage("i/sgfs.png");
  planes = loadImage("i/tile010.png");
  planea = loadImage("i/rrr.png");
  planef = loadImage("i/tile002.png");
  bullet1 = loadImage("i/images.png");
  explosiona= loadAnimation("h/tile000.png","h/tile001.png","h/tile002.png","h/tile003.png","h/tile004.png","h/tile005.png","h/tile006.png","h/tile007.png","h/tile008.png","h/tile009.png","h/tile010.png","h/tile011.png","h/tile012.png","h/tile013.png","h/tile014.png","h/tile015.png","h/yre.png");
  explosiona.looping=false;
  bgs = loadImage("h/this.jfif");

}

function draw() {
  background(bgs); 

  console.log(gameState);

  enemy.plane.debug=true;
  //enemy.plane.setcollider=20,20;
  plane.plane.debug=true;

  if(gameState===1){
    if(keyDown("SPACE")){
      plane.shoot(1);
  
    }
  
    plane.keys();
  
    enemy.x=enemy.plane.x;
    enemy.y=enemy.plane.y-5;
    if(enemy.plane.x<0){
      enemy.plane.x=600;
      enemy.plane.y=random(200,400);
      enemy.plane.velocityY=random(-3,3);
      enemy.plane.visible=true;
  
    }
  
    if(enemy.plane.visible===true){
      enemy.shoot(-1);
    
    }

  }
  
  if(plane.plane.isTouching(enemy.plane)){
    gameState=2;
    plane.plane.addAnimation("ajfa",explosiona);

  }

  if(gameState===2){
    if(keyDown("a")){
      gameState=1
    }

  }

  drawSprites();
}

