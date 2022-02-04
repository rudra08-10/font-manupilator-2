function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,430);
    canvas.position(560,90);

    poseNet=ml5.poseNet(video,modelloded);
    poseNet.on('pose',gotResults);
}
 function draw()
 {
     background('#AAFF00');

 }

 function modelloded()
 {
     console.log('model is loaded');
 }
 function gotResults(results)
 {
     if(results.length>0)
     {
         console.log(results);
     }
 }