var bullet1, bullet2, bullet3, bullet4
var wall1 
var wall2 
var wall3 
var wall4
var thickness1, thickness2, thickness3, thickness4
var weight 
var speed
var damage1, damage2, damage3, damage4

function setup() {
  createCanvas(1600, 400);
  bullet1 = createSprite(30, 50, 20, 5);
  bullet1.shapeColor = color(10, 200, 45);

  bullet2 = createSprite(30, 150, 20, 5);
  bullet3 = createSprite(30, 250, 20, 5);
  bullet4 = createSprite(30, 350, 20, 5);

  wall1 = createSprite(1400, 0, 15, 100);
  wall1.shapeColor = color(80, 80, 80);

  wall2 = createSprite(1400, 100, 15, 100);
  wall2.shapeColor = color(80, 80, 80);

  wall3= createSprite(1400, 200, 15, 100);
  wall3.shapeColor = color(80, 80, 80);

  wall4 = createSprite(1400, 300, 15, 100);
  wall4.shapeColor = color(80, 80, 80);
  
  speed = Math.round(random(223, 321));
  
  weight = Math.round(random(30, 52));
  
  thickness1 = Math.round(random(22, 83));
  thickness2 = Math.round(random(22, 83));
  thickness3 = Math.round(random(22, 83));
  thickness4 = Math.round(random(22, 83));

}

function draw() {
  background("black");
  
  bullet1.collide(wall1);
  bullet2.collide(wall2);
  bullet3.collide(wall3);
  bullet4.collide(wall4);

  if(keyDown("space")){
  bullet1.velocityX = speed/10;
  bullet2.velocityX = speed/10;
  bullet3.velocityX = speed/10;
  bullet4.velocityX = speed/10;  
  }

   damage1 = 0.5 * weight * speed * speed/(thickness1 * thickness1 * thicnkess1);
   dammage2 = 0.5 * weight * speed * speed/(thickness2 * thickness2 * thickness2);
   damage3 = 0.5 * weight * speed * speed/(thickness3 * thickness3 * thickness3);
   damage4 = 0.5 * weight * speed * speed/(thickness4 * thickness4 * thickness5);

  if (hasCollided(bullet1, wall1) && damage1 > 10){
      bullet1.shapeColor = color(230, 0, 0);
      wall1.shapeColor = color(230, 0, 0); 
  }
  else {bullet1.shapeColor = color(0, 230, 0)
        wall1.shapeColor = color(0, 230, 0)
       }

  if (hasCollided(bullet2, wall2) && damage2 > 10){
    bullet2.shapeColor = color(230, 0, 0); 
    wall2.shapeColor = color(230, 0, 0); 
}
else {bullet2.shapeColor = color(0, 230, 0)
      wall2.shapeColor = color(0, 230, 0)
     }
  
if (hasCollided(bullet3, wall3) && damage3 > 10){
   bullet3.shapeColor = color(230, 0, 0);
   wall3.shapeColor = color(230, 0, 0); 
}
else {bullet3.shapeColor = color(0, 230, 0)
      wall3.shapeColor = color(0, 230, 0)
   }

if (hasCollided(bullet4, wall4) && damage4 > 10){
  bullet4.shapeColor = color(230, 0, 0);
  wall4.shapeColor = color(230, 0, 0); 
}
else {bullet4.shapeColor = color(0, 230, 0)
     wall4.shapeColor = color(0, 230, 0)
  }

      text("Green is a safe wall material, you don't need to worry about bullets piercing them.", 180, 100);
      text("Red is terrible wall material, bullets can go through it like butter.", 190, 300);

  drawSprites();
} 
