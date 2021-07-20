class Bullet{
    constructor(x,y,direction){
        this.bullet = createSprite(x+20,y+7,10,5);
        this.bullet.velocityX= 10;
        this.bullet.lifetime = 90;
        this.bullet.addImage("planei",bullet1);
        this.bullet.scale=0.09;
        this.bullet.depth=plane.plane.depth-1;
        this.direction=direction;

        if(direction===-1){
            this.bullet.velocityX=-10;
            this.bullet.mirrorX(-1);
        }
        
    }

    dest(){
        if(this.bullet.isTouching(enemy.plane)&&this.direction===1){
            console.log("win");
            enemy.plane.visible=false;
            var ex = createSprite(enemy.plane.x,enemy.plane.y);
            ex.addAnimation("explosiona",explosiona);

        }
    }
}