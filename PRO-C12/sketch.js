var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var coin , coinImg;
var energyDrink , energyDrinkImg

function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg = loadImage("path.png")
  //loadAnimation (carregarAnimação) de corrida para o menino
  boyImg = loadAnimation("Runner-1.png","Runner-2.png")

  coinImg = loadImage("coin.png")

 energyDrinkImg = loadImage("energyDrink.png")
}

function setup(){
  
  createCanvas(400,400)
  //crie um sprite para a pista 
  path = createSprite(200,200,40,40)
  //adicione uma imagem para a pista
  path.addImage("path", pathImg)
  //Faça com que a pista seja um fundo que se move dando a ela velocity Y.
  path.scale=1.2

  //crie um sprite de menino
  boy= createSprite(200,160,20,20)
  boy.addAnimation("boy", boyImg)
  //adicione uma animação de corrida para ele
  boy.scale=0.08;

  //crie um limite à esquerda
  leftBoundary=createSprite(0,0,100,800);
  //defina visibilidade como falsa para o limite à esquerda

  //crie um limite à direita
  rightBoundary=createSprite(410,0,100,800);
  //defina visibilidade como falsa para o limite à direita

}


function draw() {
  
  background(0);
  path.velocityY = 6;
  

  // mover o menino com o mouse usando mouseX
  boy.x = World.mouseX
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
   boy.collide(rightBoundary)
   boy.collide(leftBoundary)
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
 
  drawSprites();

  spawnCoins()

  spawnEnergydrinks()
   
}

function spawnCoins(){
  if(frameCount %60 == 0){ 
    coin=createSprite(200,10,40,10);         
    coin.velocityY = 6
    coin.addImage("coin" , coinImg)
    coin.scale= 0.3
  
  }
}

function spawnEnergydrinks(){
  if(frameCount %90 == 0){ 
    energyDrink=createSprite(100,10,40,10);         
    energyDrink.velocityY = 6
    energyDrink.addImage("energy" , energyDrinkImg)
    energyDrink.scale= 0.1

  }

}