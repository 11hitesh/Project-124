noseX=0;
noseY=0;
DIFFERENCE=0;
leftwristx=0;
rightwristx=0;

function setup()
{
canvas=createCanvas(400,400);
video=createCapture(VIDEO);
video.size(550,550);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('model loaded');
}