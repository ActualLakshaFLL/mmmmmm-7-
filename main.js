noseX=0;
noseY=0;



function setup(){
    canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{  
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    //circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}








function preload() {
    mustache_rawr=loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.center()
    video = createCapture(VIDEO);
  video.size(600, 600);
  video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{  
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 600, 600);
    fill(400,0,0);
    stroke(400,0,0);
    //circle(noseX, noseY, 20);
    image(mustache_rawr, noseX, noseY, 80, 80);
}

function take_snapshot(){
    save('mymustachehehhe.png');
}

function gotPoses(results)
{  
    if(results.length > 0)  {    console.log(results);   
         console.log("nose x = " + noseX);   
          console.log("nose y = " + noseY);  
          noseX= results[0].pose.nose.x -40;
          noseY= results[0].pose.nose.y -12;
        }
    }


