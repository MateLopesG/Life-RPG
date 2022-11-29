//Versão 0.02 = Tutorial para os stats (esc menu)

let xChar = 400;
let yChar = 300;
let comprimentoChar = 50;
let alturaChar = 100;


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  level();
  currentLevel();
  quest();
  currentQuest();
  myChar ();
  life ();
  magic ();
  speedChar ();
  attack ();
  defence ();
}

function level (){
textSize(20);
text( 'Level:', 10, 30);
fill(250);
}

function currentLevel (){
textSize(20);
text( '1', 65, 30);
fill(250, 250, 250);
}

function quest (){
textSize(20);
text( 'Quest:', 10, 60);
fill(250);
}

function currentQuest (){
textSize(20);
text( 'Faça seu jogo até o relógio apitar.', 70, 60);
fill(250);
}

function myChar (){
  rect (xChar, yChar, comprimentoChar, alturaChar)
} 

function life (){
textSize(20);
text( 'Life: 1', 10, 510);
fill(250, 250, 250);
}

function magic (){
textSize(20);
text( 'Magic: 1', 10, 530);
fill(250, 250, 250);
}

function defence (){
textSize(20);
text( 'Defence: 1', 10, 550);
fill(250, 250, 250);
}

function attack (){
textSize(20);
text( 'Attack: 1', 10, 570);
fill(250, 250, 250);
}

function speedChar (){
textSize(20);
text( 'Speed: 1', 10, 590);
fill(250, 250, 250);
}