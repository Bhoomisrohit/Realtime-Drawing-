noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
colorb="cyan";

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("model is initialized");
}



function gotPoses(results,error)
{
   if(error)
   {
       console.error(error);
   }

   if(results.length>0)
   {
       console.log(results);
       noseX=results[0].pose.nose.x;
       noseY=results[0].pose.nose.y;
       console.log("noseX = " + noseX + "noseY = "+ noseY);
       rightWristX=results[0].pose.rightWrist.x;
       leftWristX=results[0].pose.leftWrist.x;
       difference= floor(leftWristX-rightWristX);



   }
}



  
  



function draw()
{
    background('#969A97');
    document.getElementById("square_side").innerHTML="width and height of a square will be = " + difference + "px";    
    colorb=document.getElementById("text").value;
    fill(colorb);
    stroke(colorb);
    square(noseX,noseY,difference);
}