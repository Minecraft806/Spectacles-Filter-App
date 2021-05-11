var NoseByX=0;
var NoseHelloY=0;

var eye1=0;
var eye2=0;
var eye_1_1=0;
var eye_1_2=0;

var earl_1=0;
var earl_2=0;
var earR_1=0;
var earR_2=0;

function preload() {
ClownyNoseBoy=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}

function setup() {
    canvas=createCanvas(250,200)
    canvas.center();
    video=createCapture(VIDEO)
    video.hide();
    video.size(250,200);
    postnet=ml5.poseNet(video,modelLoaded)
    postnet.on('pose',gotPosesYoYouHearinThis)
}

function gotPosesYoYouHearinThis(results) {
    if(results.length>0) {
        console.log(results)
        //NoseByX=results[0].pose.nose.x-10;
        //NoseHelloY=results[0].pose.nose.y-10;
        eye1=results[0].pose.leftEye.x;
        eye2=results[0].pose.leftEye.y;

        eye_1_1=results[0].pose.rightEye.x;
        eye_1_2=results[0].pose.rightEye.y;

        //Break

        earl_1=results[0].pose.leftEar.x;
        earl_2=results[0].pose.leftEar.y;

        earR_1=results[0].pose.rightEar.x;
        earR_2=results[0].pose.rightEar.y;

        console.log("nosey x= "+NoseByX);
        console.log("nosey y= "+NoseHelloY);
    }
}

function modelLoaded() {
    console.log("Model Has Been Loaded... Repeat")
}

function draw() {
image(video,0,0,250,200);
circle(eye1,eye2,20);
circle(eye_1_1,eye_1_2,20);

line(eye1-10,eye2,eye_1_1+10,eye_1_2);

line(eye1+10,eye2,earl_1,earl_2);
line(eye_1_1-10,eye_1_2,earR_1,earR_2)

fill(0,0,0);
stroke(255,0,0)
//image(ClownyNoseBoy,NoseByX,NoseHelloY,25,20)
}

function take_snap_01() {
    save("download.png")
}