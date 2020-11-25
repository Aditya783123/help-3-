

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var div = [];
var particle = [];
var plinko = [];
var divisionHeight = 300;
function setup() {
  createCanvas(480,800);
  for (var k = 0; k <=width; k = k + 80) {
    div.push(new Div(k, height - divisionHeight/2, 10, divisionHeight));
  }
  //if(frameCount%60 === 0){
    //particle.push(new Particle(random(width/2 - 30, width/2 + 30), 10, 10))
// }
  //for(var j = 40; j<=width; j = j + 50){
    //plinko.push(new Plinko(j, 75))
  //}

   //for(var j = 15; j<= width - 10; j = j + 50){
    //plinko.push(new Plinko(j, 175))
 // }
}
function draw() {
  background("black");  
  
  drawSprites();
}

