function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


difference = 0;
rightwristX = 0;
leftWristX = 0;

function draw(){

    document.getElementById("square_sides").innerHTML = "font size of the text will be = " + difference +"px";

    background('#969A97');
    fill('#F90093');
    textSize(difference);
    text('Sourish',50,400);
}

function modelLoaded(){

    console.log("posenet is Initialized")
}

function gotPoses(results){
    if(results.length>0){
        console.log("results");
       

        leftWristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightwristX);

        console.log("leftWristX =" + leftWristX + " rightWristX =" + rightwristX + " difference = " + difference);
    }
}