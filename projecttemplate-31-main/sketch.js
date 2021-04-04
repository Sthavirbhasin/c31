const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var drops=[]
var maxdrop=100
function preload(){
    
}

function setup(){
  engine=Engine.create()
  world=engine.world
  createCanvas(400,700) 
  if (frameCount%150===0){
      for(var i=0;i<maxdrop;i++){
          drops.push(new Drop(random(0,400),random(0,400)))
      }
  }
    
}

function draw(){
    background(0)
    for(var i=0;i<maxdrop;i++){
        drops[i].display()
        drops[i].update()
    } 
}   

