// Ollie Giulione 
// Pascal Huynh  
// Web & FX, 502-A22-LA setc. 00001 
// Interactive Project 'For the Birds' 
// https://openprocessing.org/sketch/1883786 
  
/* Hello! In this interactive experience,  
you are watching the story of a family of birds  
and what they do at every season's passing. 
  
In the Spring, you see a 'Mama Bird' with her three eggs. 
In Summer, the eggs have hatched into baby birds. 
In Fall, the family migrates South. 
In winter, they are not there.  
Once you click through all four slides, the seasons reset 
and you can experience the following year with a new iteration  
of the bird family. 
  
Interactive points include:  
1. keyPressed: when you press space, the birds chirp! I wanted to incorporate 
sound, but OpenProcessing would not let me, as "loadSound" was not something that 
could apparently be defined.  
2. mouseX drag: When the mouse is on the left, it is 'early morning'.  
When the mouse is in the middle, it is 'afternoon'. 
When the mouse is on the right, it is 'nighttime'. 
This occurs because the background changes color. Not only do you see the birds at different 
times of the year, you also see them at different times of the day. 
3. mouseClick: every time you click the screen, the season changes. 
  
Unfortunates: 
OpenProcessing ruins the script without telling me how to fix it. ChatGPT does not help either. 
Therefore, you cannot experience the entire activity together. If you were to remove the keyPressed 
and Background, you could see the effort I put into the birds. In keeping all three  
points of interactivity, you only see the background change color. I am confused as well. 
I am sorry. I tried. 
 
My code is clean and I have three points of interactivity nonetheless. 
*/ 
 
 
let  treecol = [112,78,46]  
let a  
let snowflake  
let leaves 
let colR 
let colG 
let colB 
let summer 
let nest 
 
function preload (){ 
  snowflake = loadImage ('snowflakes.png') 
  leaves = loadImage ('autumn1.png') 
  summer = loadImage ('summer1.png') 
  nest = loadImage ('nest.png') 
} 
  
function setup() {  
  createCanvas(500,500);  
  a=0  
  colR = 10 
  colG = 150 
  colB = 150 
  textAlign(CENTER) 
  textSize(50) 
   
}  
  
   
function draw() {  
  if (mouseX >= 0 && mouseX < 166) { 
    background(229, 178, 93); 
  } else if (mouseX >= 166 && mouseX < 332) { 
    background(8, 127, 140); 
  } else if (mouseX >= 332 && mouseX <= 500) { 
    background(0, 52, 89); 
  } 
} 
  
   
  fill(treecol) 
  noStroke() 
  rect(459,200,500,500) 
  triangle(500,0,375,0,500,200) 
  triangle(440,99,500,200,459,250) 
  triangle(459,300,400,500,459,500) 
  triangle(300,20,370,30,500,90) 
  triangle(470,240,470,270,300,280) 
  triangle(350,275,230,280,270,285) 
  
  if (a===0){ //summer 
     
    //mama bird 
    fill(221,17,85) 
    ellipse(350,200,80,100) 
    circle(350,150,50) 
    fill(0) 
    circle(335,140,10) 
    circle(365,140,10) 
    fill(244, 224, 77) 
    triangle(340,150,360,150,350,160) 
  
    //baby bird 1 
    fill(255,200,221) 
    ellipse(300,220,40,60) 
    fill(0) 
    circle(290,205,7) 
    circle(310,205,7) 
    fill(244,224,77) 
    triangle(293,210,307,210,300,215) 
     
    //baby bird 2 
    fill(193, 18, 31) 
    ellipse(345,220,40,60) 
    fill(0) 
    circle(335,205,7) 
    circle(355,205,7) 
    fill(244,224,77) 
    triangle(339,210,349,210,344,215) 
     
    //baby bird 3 
    fill(114, 9, 183) 
    ellipse(390,220,40,60) 
    fill(0) 
    circle(400,205,7) 
    circle(380,205,7) 
     
     
    image (nest,0,0) 
    image (summer,0,0) 
  }  
  
  if (a===1){ //fall 
    image (leaves,0,0) 
  //mama bird 
    fill(244, 224, 77) 
    triangle(20,40,40,40,50,70) 
    fill(221, 17, 85) 
    circle(50,50,40) 
    triangle(65,40,50,70,90,60) 
    fill(0) 
    circle(43,43,10) 
    fill(221,17,85) 
    triangle(80,20,60,40,75,55) 
     
  //baby bird 1 
    fill(244,224,77) 
    triangle(50,95,50,105,35,95) 
    fill(255, 200, 221) 
    circle(60,100,30) 
    triangle(60,115,60,100,90,100) 
    triangle(50,100,75,100,80,80) 
    fill(0) 
    circle(55,93,7) 
     
  //baby bird 2 
    fill(244,224,77) 
    triangle(105,35,130,40,130,50) 
    fill(114, 9, 183) 
    circle(130,40,30) 
    triangle(130,40,130,55,160,40) 
    triangle(130,40,145,40,150,20) 
    fill(0) 
    circle(125,33,7) 
     
  //baby bird 3 
    fill(244,224,77) 
    triangle(105,75,90,75,105,85) 
    fill(193, 18, 31) 
    circle(115,80,30) 
    triangle(115,80,115,95,140,80) 
    triangle(115,80,130,80,140,65) 
    fill(0) 
    circle(110,73,7) 
     
    image (leaves,0,0) 
  }  
  
  if (a===2){ //winter 
    image(snowflake,0,0) 
  //snow pile 
    }  
   
  if (a===3){ //spring 
     
    //mama bird 
    fill(244,224,77) 
    triangle(300,200,330,180,330,220) 
    fill(221, 17, 85) 
    ellipse(360,220,80,50) 
    circle(330,200,50) 
    triangle(420,230,390,230,390,210) 
    fill(0) 
    circle(320,190,10) 
     
    //eggs 
    fill(102, 206, 214) 
    ellipse(290,230,25,40) 
    ellipse(315,230,25,40) 
    ellipse(340,230,25,40) 
  
       
    image (nest,0,0) 
   
} 
   
function mousePressed() {  
  a=a+1  
  if (a===4){  
  a=0 
  }  
   
  function keyPressed(){ 
    if (key === 32){ 
      fill(0) 
      text('Chirp',200,200) 
           
} 
} 
  
     
} 
