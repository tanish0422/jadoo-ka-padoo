var starImg,bgImg;
var star, starBody;

var noice,fairyImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	noice = loadSound("sound/JoyMusic.mp3")
	//load animation for fairy here
	fairyImg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	//noice.play()

	//create fairy sprite and add animation for fairy
	fairy=createSprite(130,520)
	fairy.addAnimation("fairy",fairyImg)
	fairy.scale=0.25

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.25;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  Engine.update(engine)

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
	if(star.y>470 && starBody.position.y>470 ){
	
		Matter.Body.setStatic(starBody,true)
	}
  
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	
	if (keyCode === RIGHT_ARROW) {
	fairy.x=fairy.x+10
		
	}

	if (keyCode === LEFT_ARROW) {
		fairy.x=fairy.x-10	
	}
}
