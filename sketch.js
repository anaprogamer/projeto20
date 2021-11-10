var gatinho;
var rato;
function preload() {
    //carregue as imagens aqui
    gatoimg=loadImage("cat1.png");
    ratoimg= loadImage("mouse1.png");
    gatoimg2=loadImage("cat2.png");
    ratoimg2= loadImage("mouse.png");
    gatoimg3= loadImage("cat3.png")
    casajardim= loadImage ("garden,png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui 
    rato = createSprite = (400,200);
    rato.addImage = ("mouse1png", ratoimg);

    gatinho = createSprite = (200,100);
    gatinho.addImage =("cat1.png", gatoimg);
    
}

function draw() {

    background("garden.png");
    //Escreva a condição aqui para avaliar se o gato e o rato colidem


    if(gatinho.x - rato.x < (gatinho.width - rato.width)/2){
       gatinho.addAnimation("cat3.png", gatoimg3);
       gatinho.velocityX = 0;

    }
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
  if(keyPressed(space)){
    rato.addAnimation("cat2.png", gatoimg2);
    rato.changeAnimation("cat2.png");
    gatinho.addAnimation("cat2.png", gatoimg2);

    gato.velocityX= -5;

}
}
