//Menu
var som
var tela = 1;
var largura = 110;
var altura = 25;
var xMenu = 150;
var yMenu1 = 250;
var yMenu2 = 270;
var yMenu3 = 290;
var xTitulo = 0
var yTitulo = 0
// Botao VOLTAR
var alturaVolt = 40;
var larguraVolt =90;
var xMenuVolt = 5;
var yMenuVolt = 350;
// Botao NEXT
var alturaNext = 40;
var larguraNext =90;
var xMenuNext = 300;
var yMenuNext = 350;
//Botoes da Tela 2
var larguraB = 60;
var alturaB = 60;
var xB1 = 80;
var yB1 = 60;
var xB2 = 150;
var yB2 = 60;
var xB3 = 220;
var yB3 = 60;
var xB4 = 80;
var yB4 = 120;
var xB5 = 150;
var yB5 = 120;
var xB6 = 220;
var yB6 = 120;
var xB7 = 80;
var yB7 = 180;
var xB8 = 150;
var yB8 = 180;
var xB9 = 220;
var yB9 = 180;
var press1 = false;
var press2 = false;
var press3 = false;
var press4 = false;
var press5 = false;
var press6 = false;
var press7 = false;
var press8 = false;
var press9 = false;
var cont = 0;
var tentativas = 3;

// Imagens
var img;
function preload() {
  img = loadImage('jogodavelha.2jpg.png');
  img2 = loadImage('cesar.png');
  soundFormats = ('mp3','ogg')
  som = loadSound('nomogus41.ogg', loadOpen)
}
function loadOpen(){
  som.play()
}

function setup() {
  createCanvas(400, 400);
  frameRate(5)
}

function mouseReleased() {
}

function touchEnded() {
  
}

function draw() {
  textStyle(ITALIC);
  // Tela de Menu
  if(tela == 1){
    background(255);
  //Menu com 3 Opções + Titulo
  //Iniciar o Jogo
    image(img, 20,20);
    strokeWeight(5);
    textAlign(CENTER, BASELINE);
    textSize(15);
    
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
    stroke(10);
    fill(0,255,0);
    rect(xMenu,yMenu1,largura,altura,10);
      if(mouseIsPressed){
        tela = 2;
        press1 = false;
        press2 = false;
        press3 = false;
        press4 = false;
        press5 = false;
        press6 = false;
        press7 = false;
        press8 = false;
        press9 = false;
      }
    }
    
    fill(0);
    noStroke();
    text("PLAY", 200, 270);
    
    //Instrução
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
    stroke(0);
    fill(0,255,0);
    rect(xMenu,yMenu2,largura,altura,15);
      if(mouseIsPressed){
        tela = 3
      }
    }
    
    fill(0);
    noStroke();
    text("INSTRUCTION", 200, 290);
    
    //Creditos
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
    stroke(0);
    fill(0,255,0);
    rect(xMenu,yMenu3,largura,altura,15);
      if(mouseIsPressed){
        tela = 4
      }
    }
    fill(0);
    noStroke();
    text("CREDITS", 200, 310);
    
     //Titulo
    fill(0,200,0);
    stroke(255);
    textSize(50)
    text("OLD MATH", 200,100);
    
  }
  // Tela 2 (1º fase)
  if(tela == 2){
    background(0)
    textStyle();
    textSize(15);
    text("Aperte a linha, coluna ou diagonal \n que some 15", 200, 280)
    
    fill(255)
    text("Tentativas: " + tentativas, 100, 50);
    
    //Criando Quadrados Selecionaveis
      //Botao 1
    
    stroke(0);
    textSize(25);
    if(press1){
     fill(255);
    } else {
     fill(0,255,0)
    }
    rect(xB1,yB1,larguraB,alturaB,15);
    fill(0)
    text("4", xB1 + larguraB/2, yB1 + alturaB/2 + 12);
                  
    
    //Botao 2
    stroke(0);
    if(press2){
     fill(255);
    } else {
     fill(0,255,0)
    }
    rect(xB2,yB2,larguraB,alturaB,15);
    fill(0)
    text("9", xB2 + larguraB/2, yB2 + alturaB/2 + 12);
    
    //Botao 3
    stroke(0);
    if(press3){
     fill(255);
    } else {
     fill(0,255,0)
    }
    rect(xB3,yB3,larguraB,alturaB,15);
    fill(0)
    text("2", xB3 + larguraB/2, yB3 + alturaB/2 + 12);
    
    //Botao 4
    stroke(0);
    if(press4){
     fill(255);
    } else {
     fill(0,255,0)
    }
    rect(xB4,yB4,larguraB,alturaB,15);
    fill(0)
    text("3", xB4 + larguraB/2, yB4 + alturaB/2 + 12);
    
    //Botao 5
    stroke(0);
    if(press5){
     fill(255);
    } else {
     fill(0,255,0)
    }
    rect(xB5,yB5,larguraB,alturaB,15);
    fill(0)
    text("5", xB5 + larguraB/2, yB5 + alturaB/2 + 12);
    
    //Botao 6
    stroke(0);
    if(press6){
     fill(255);
    } else {
     fill(0,255,0)
    }
    rect(xB6,yB6,larguraB,alturaB,15);
    fill(0)
    text("7", xB6 + larguraB/2, yB6 + alturaB/2 + 12);
    
    //Botao 7
    stroke(0);
    if(press7){
     fill(255);
    } else {
     fill(0,255,0)
    }
    rect(xB7,yB7,larguraB,alturaB,15);
    fill(0)
    text("6", xB7 + larguraB/2, yB7 + alturaB/2 + 12);
    
    //Botao 8
    stroke(0);
    if(press8){
     fill(255);
    } else {
     fill(0,255,0)
    }
    rect(xB8,yB8,larguraB,alturaB,15);
    fill(0)
    text("1", xB8 + larguraB/2, yB8 + alturaB/2 + 12);
    
    //Botao 9
    stroke(0);
    if(press9){
     fill(255);
    } else {
     fill(0,255,0)
    }
    rect(xB9,yB9,larguraB,alturaB,15);
    fill(0)
    text("0", xB9 + larguraB/2, yB9 + alturaB/2 + 12);
    
    //Verificando se os botões foram selecionados
    //Botão 1
    if(mouseIsPressed && mouseX < xB1 + larguraB && mouseX > xB1 && mouseY < yB1 + alturaB && mouseY> yB1){     
      press1 = true;
      cont++;
    }
    
    //Botão 2
    if(mouseIsPressed && mouseX < xB2 + larguraB && mouseX > xB2 && mouseY < yB2 + alturaB && mouseY> yB2){     
      press2 = true;   
      cont++;
    }
    
    //Botão 3
    if(mouseIsPressed && mouseX < xB3 + larguraB && mouseX > xB3 && mouseY < yB3 + alturaB && mouseY> yB3){     
      press3 = true; 
      cont++;
    }
    
    //Botão 4
    if(mouseIsPressed && mouseX < xB4 + larguraB && mouseX > xB4 && mouseY < yB4 + alturaB && mouseY> yB4){     
      press4 = true;   
      cont++;
    }
    
    //Botão 5
    if(mouseIsPressed && mouseX < xB5 + larguraB && mouseX > xB5 && mouseY < yB5 + alturaB && mouseY> yB5){     
      press5 = true;   
      cont++;
    }
    
    //Botão 6
    if(mouseIsPressed && mouseX < xB6 + larguraB && mouseX > xB6 && mouseY < yB6 + alturaB && mouseY> yB6){     
      press6 = true; 
      cont++;
    }
    
    //Botão 7
    if(mouseIsPressed && mouseX < xB7 + larguraB && mouseX > xB7 && mouseY < yB7 + alturaB && mouseY> yB7){     
      press7 = true;
      cont++;
    }
    
    //Botão 8
    if(mouseIsPressed && mouseX < xB8 + larguraB && mouseX > xB8 && mouseY < yB8 + alturaB && mouseY> yB8){     
      press8 = true; 
      cont++;
    }
    
    //Botão 9
    if(mouseIsPressed && mouseX < xB9 + larguraB && mouseX > xB9 && mouseY < yB9 + alturaB && mouseY> yB9){     
      press9 = true;
      cont++;
    }
    
    if(cont == 3){
      if(press1 && press2 && press3){
        tela = 8;
        press1 = false;
        press2 = false;
        press3 = false;
        press4 = false;
        press5 = false;
        press6 = false;
        press7 = false;
        press8 = false;
        press9 = false;
      } else {
        tentativas--;
        
        press1 = false;
        press2 = false;
        press3 = false;
        press4 = false;
        press5 = false;
        press6 = false;
        press7 = false;
        press8 = false;
        press9 = false;
        
      }
      cont = 0;
    }
    
    if(tentativas <= 0){
      tentativas = 3
      tela = 7;
    }
    
    //Botão exit da tela 2
    if( mouseX > xMenuVolt && mouseX < xMenuVolt + larguraVolt && mouseY > yMenuVolt && mouseY < yMenuVolt + alturaVolt){
    stroke(255);
    fill(0,255,0);
    rect(xMenuVolt,yMenuVolt,larguraVolt,alturaVolt,0);
      if(mouseIsPressed){
        tela = 1;
      }
    }
    fill(200);
    noStroke();
    textSize(30)
    text("<exit",40,380);
    
  }
  
  // INSTRUCTION
  if(tela == 3){
    background(40,0,255)
    fill(255);
    noStroke();
    rect(145,35,largura,altura,15);
    fill(0);
    textSize(15);
    text("INSTRUCTION", 200, 55);
    textSize(20);
    text("Comandos do jogo : utilize o mouse para \n selecionar os comandos. \n \n Objetivo : selecionar os campos \n cujo a somatória contenha \n a resposta informada ao final da tela", 200, 150); 
    if(mouseX > xMenuVolt && mouseX < xMenuVolt + larguraVolt && mouseY > yMenuVolt && mouseY < yMenuVolt + alturaVolt){
    stroke(255);
    fill(0,255,0);
    rect(xMenuVolt,yMenuVolt,larguraVolt,alturaVolt,0);
      if(mouseIsPressed){
        tela = 1
      }
    }
    fill(200);
    noStroke();
    textSize(30)
    text("<exit",40,380);
    
  }
  
  // CRÉDITOS
   if(tela == 4){
    background(40,0,255);
     image(img2,180,200);
     fill(255);
     noStroke();
     rect(145,35,largura,altura,15);
    fill(0);
    textSize(15);
    text("CREDITS", 200, 55);
     textSize(20);
     text("Criador do jogo: Cesar Augusto. \n Instagram: cesaraugs_", 200, 150);
      if(mouseX > xMenuVolt && mouseX < xMenuVolt + larguraVolt && mouseY > yMenuVolt && mouseY < yMenuVolt + alturaVolt){
    stroke(255);
    fill(0,255,0);
    rect(xMenuVolt,yMenuVolt,larguraVolt,alturaVolt,0);
      if(mouseIsPressed){
        tela = 1
      }
    }
      fill(200);
    noStroke();
    textSize(30)
    text("<exit",40,380);
     
     
  }
  
  // Tela 5 (2º fase)
  if(tela == 5){
    background(0)
    textStyle();
    textSize(15);
    text("Aperte a linha, coluna ou diagonal \n que some 13", 200, 280)
    
    fill(255)
    text("Tentativas: " + tentativas, 100, 50);
    
    //Criando Quadrados Selecionaveis
      //Botao 1
    
    stroke(0);
    textSize(25);
    if(press1){
     fill(255);
    } else {
     fill(0,255,0)
    }
    rect(xB1,yB1,larguraB,alturaB,15);
    fill(0)
    text("4", xB1 + larguraB/2, yB1 + alturaB/2 + 12);
                  
    
    //Botao 2
    stroke(0);
    if(press2){
     fill(255);
    } else {
     fill(0,255,0)
    }
    rect(xB2,yB2,larguraB,alturaB,15);
    fill(0)
    text("9", xB2 + larguraB/2, yB2 + alturaB/2 + 12);
    
    //Botao 3
    stroke(0);
    if(press3){
     fill(255);
    } else {
     fill(0,255,0)
    }
    rect(xB3,yB3,larguraB,alturaB,15);
    fill(0)
    text("2", xB3 + larguraB/2, yB3 + alturaB/2 + 12);
    
    //Botao 4
    stroke(0);
    if(press4){
     fill(255);
    } else {
     fill(0,255,0)
    }
    rect(xB4,yB4,larguraB,alturaB,15);
    fill(0)
    text("3", xB4 + larguraB/2, yB4 + alturaB/2 + 12);
    
    //Botao 5
    stroke(0);
    if(press5){
     fill(255);
    } else {
     fill(0,255,0)
    }
    rect(xB5,yB5,larguraB,alturaB,15);
    fill(0)
    text("5", xB5 + larguraB/2, yB5 + alturaB/2 + 12);
    
    //Botao 6
    stroke(0);
    if(press6){
     fill(255);
    } else {
     fill(0,255,0)
    }
    rect(xB6,yB6,larguraB,alturaB,15);
    fill(0)
    text("7", xB6 + larguraB/2, yB6 + alturaB/2 + 12);
    
    //Botao 7
    stroke(0);
    if(press7){
     fill(255);
    } else {
     fill(0,255,0)
    }
    rect(xB7,yB7,larguraB,alturaB,15);
    fill(0)
    text("6", xB7 + larguraB/2, yB7 + alturaB/2 + 12);
    
    //Botao 8
    stroke(0);
    if(press8){
     fill(255);
    } else {
     fill(0,255,0)
    }
    rect(xB8,yB8,larguraB,alturaB,15);
    fill(0)
    text("1", xB8 + larguraB/2, yB8 + alturaB/2 + 12);
    
    //Botao 9
    stroke(0);
    if(press9){
     fill(255);
    } else {
     fill(0,255,0)
    }
    rect(xB9,yB9,larguraB,alturaB,15);
    fill(0)
    text("0", xB9 + larguraB/2, yB9 + alturaB/2 + 12);
    
    //Verificando se os botões foram selecionados
    //Botão 1
    if(mouseIsPressed && mouseX < xB1 + larguraB && mouseX > xB1 && mouseY < yB1 + alturaB && mouseY> yB1){     
      press1 = true;
      cont++;
    }
    
    //Botão 2
    if(mouseIsPressed && mouseX < xB2 + larguraB && mouseX > xB2 && mouseY < yB2 + alturaB && mouseY> yB2){     
      press2 = true;   
      cont++;
    }
    
    //Botão 3
    if(mouseIsPressed && mouseX < xB3 + larguraB && mouseX > xB3 && mouseY < yB3 + alturaB && mouseY> yB3){     
      press3 = true; 
      cont++;
    }
    
    //Botão 4
    if(mouseIsPressed && mouseX < xB4 + larguraB && mouseX > xB4 && mouseY < yB4 + alturaB && mouseY> yB4){     
      press4 = true;   
      cont++;
    }
    
    //Botão 5
    if(mouseIsPressed && mouseX < xB5 + larguraB && mouseX > xB5 && mouseY < yB5 + alturaB && mouseY> yB5){     
      press5 = true;   
      cont++;
    }
    
    //Botão 6
    if(mouseIsPressed && mouseX < xB6 + larguraB && mouseX > xB6 && mouseY < yB6 + alturaB && mouseY> yB6){     
      press6 = true; 
      cont++;
    }
    
    //Botão 7
    if(mouseIsPressed && mouseX < xB7 + larguraB && mouseX > xB7 && mouseY < yB7 + alturaB && mouseY> yB7){     
      press7 = true;
      cont++;
    }
    
    //Botão 8
    if(mouseIsPressed && mouseX < xB8 + larguraB && mouseX > xB8 && mouseY < yB8 + alturaB && mouseY> yB8){     
      press8 = true; 
      cont++;
    }
    
    //Botão 9
    if(mouseIsPressed && mouseX < xB9 + larguraB && mouseX > xB9 && mouseY < yB9 + alturaB && mouseY> yB9){     
      press9 = true;
      cont++;
    }
    
    if(cont == 3){
      if(press3 && press5 && press7){
        tela = 6;
      } else {
        tentativas--;
        
        press1 = false;
        press2 = false;
        press3 = false;
        press4 = false;
        press5 = false;
        press6 = false;
        press7 = false;
        press8 = false;
        press9 = false;
        
      }
      cont = 0;
    }
    
    if(tentativas <= 0){
      tentativas = 3
      tela = 7;
    }
    
    //Botão exit da tela 2
    if( mouseX > xMenuVolt && mouseX < xMenuVolt + larguraVolt && mouseY > yMenuVolt && mouseY < yMenuVolt + alturaVolt){
    stroke(255);
    fill(0,255,0);
    rect(xMenuVolt,yMenuVolt,larguraVolt,alturaVolt,0);
      if(mouseIsPressed){
        tela = 1;
      }
    }
    fill(200);
    noStroke();
    textSize(30)
    text("<exit",40,380);
    
  }
  
  // Tela 6 (VOCÊ GANHOU)
  if(tela == 6){
    background(40,0,255);
     fill(255);
     noStroke();
     rect(145,35,largura,altura,15);
    fill(0);
    textSize(15);
    text("YOU WIN!!", 200, 55);
     textSize(20);
     text("PONTUAÇÃO:100", 200, 150);
      if(mouseX > xMenuVolt && mouseX < xMenuVolt + larguraVolt && mouseY > yMenuVolt && mouseY < yMenuVolt + alturaVolt){
    stroke(255);
    fill(0,255,0);
    rect(xMenuVolt,yMenuVolt,larguraVolt,alturaVolt,0);
      if(mouseIsPressed){
        tela = 1
      }
    }
    fill(200);
    noStroke();
    textSize(30)
    text("<exit",40,380);
     
     
  }

  // TELA 7 (VOCÊ PERDEU)
  if(tela == 7){
    background(40,0,255);
     fill(255);
     noStroke();
     rect(145,35,largura,altura,15);
    fill(0);
    textSize(15);
    text("YOU LOSE ...", 200, 55);
     textSize(20);
     text("VAMOS TENTAR NOVAMENTE?", 200, 150);
      if(mouseX > xMenuVolt && mouseX < xMenuVolt + larguraVolt && mouseY > yMenuVolt && mouseY < yMenuVolt + alturaVolt){
    stroke(255);
    fill(0,255,0);
    rect(xMenuVolt,yMenuVolt,larguraVolt,alturaVolt,0);
      if(mouseIsPressed){
        tela = 1
      }
    }
    fill(200);
    noStroke();
    textSize(30)
    text("<exit",40,380);
     
     
  }
  
  // Tela 8 (VOCÊ GANHOU 50 PONTOS) FICA DEPOIS DA FASE 1
  if(tela == 8){
    background(40,0,255);
     fill(255);
     noStroke();
     rect(145,35,largura,altura,15);
    fill(0);
    textSize(15);
    text("YOU WIN!!", 200, 55);
     textSize(20);
     text("PONTUAÇÃO:50", 200, 150);
      if(mouseX > xMenuVolt && mouseX < xMenuVolt + larguraVolt && mouseY > yMenuVolt && mouseY < yMenuVolt + alturaVolt){
    stroke(255);
    fill(0,255,0);
    rect(xMenuVolt,yMenuVolt,larguraVolt,alturaVolt,0);
      if(mouseIsPressed){
        tela = 1
      }
    }
    fill(200);
    noStroke();
    textSize(30)
    text("<exit",40,380);
     if(mouseX > xMenuNext && mouseX < xMenuNext + larguraNext && mouseY > yMenuVolt && mouseY < yMenuNext + alturaNext){
    stroke(255);
    fill(0,255,0);
    rect(xMenuNext,yMenuNext,larguraNext,alturaNext,0);
      if(mouseIsPressed){
        tela = 5
      }
    }
    fill(200);
    noStroke();
    textSize(30)
    text("next>",340,380)
    
    
  }   
}