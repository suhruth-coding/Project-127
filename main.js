hpts = "";
ppts = "";

function preload(){
    hpts = loadSound("hpts.mp3");
    ppts = loadSound("ppts.mp3");
}

function setup(){
    canvas = createCanvas(600, 450);
    canvas.position(450, 250);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 450);
}