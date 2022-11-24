song="";

function preload(){
    song=loadSound("music.mp3");
}

scoreRightWrist=0;
scoreLefttWrist=0;

RightWristX=0;
RightWristY=0;

LeftWristX=0;
LeftWristY=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses);
}