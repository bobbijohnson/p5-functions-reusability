
function setup(){
    createCanvas(600,400);
    background(0,5,0);
}

function draw(){
    flower(300,200);
    flower(400,300);
    flower(300,400);
    
    
    if(mouseIsPressed){
        flower(mouseX,mouseY);
    }
    
}

function flower(x,y){
      
    //stem
    fill(100,0,200)
    rect(x-5,y,10,100)
    
    //pedals
    noStroke();
    fill(300,30,50)
    ellipse(x+10,y-10,40,40);
    ellipse(x+10,y+10,40,40);
    ellipse(x-10,y-10,40,40);
    ellipse(x-10,y+10,40,40);

    //bulb 
    fill(250,100,100);
    ellipse(x,y,25,25);

}