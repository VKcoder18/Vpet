//Create variables here
var dog,food,database;
function preload()
{
	//load images here
  var dog = createSprite(400,350,10,10);
  dog = loadImage("images/dogImg.png");


}

function setup() {
	createCanvas(800, 700);
  
}


function draw() {  



if(keyWentDown(A)){

}

function getFood(){
var foodRef  = database.ref('Food');
foodRef.on("value",function(data){
   food = data.val();
}


function updateCount(count){
  database.ref('/').update({
    playerCount: count
  });
}





























  drawSprites();
  //add styles here

}



