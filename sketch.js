var Engine = Matter.Engine,
//Render = Matter.Render,
World = Matter.World,
Bodies = Matter.Bodies

var engine
var world
var boxes = []

var ground

function setup() {
    createCanvas(600, 600)
    engine = Engine.create()
    world = engine.world
    console.log(width)
    Engine.run(engine) //Update of regular p5js
    ground = Bodies.rectangle(300, height, width, 10, {isStatic : true}) //The object wont be affected by gravity
    World.add(world, ground)
}

function draw() {
    background(50)
    boxes.forEach( (box) => box.show())

    noStroke(255)
    fill(170)
    rectMode(CENTER)
    rect(300, height, width, 20)
}

function mouseDragged() {
    boxes.push(new Box(mouseX, mouseY, 30, 30))
}