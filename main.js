diferencia=0;
manoderechax=0;
manoizquierda=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("el modelo inicio correctamente");
}
function draw(){
    background('#969A97');
    fill('#008f39');
    document.getElementById("square_side").innerHTML="el tamaño del texto sera ="+diferencia+"px";
    textSize(diferencia);
    text('mateo',50,100)
}
function gotPoses(results){
 if (results.length>0){
    console.log(results);

    manoderechax=results[0].pose.rightWrist.x;
    manoizquierda=results[0].pose.leftWrist.y;
    console.log("muñeca izquierda ="+manoderechax +" muñeca derecha ="+manoizquierda);
    diferencia=floor(manoizquierda-manoderechax);
    console.log("el tamaño del cuadrado es "+diferencia);
 }   
} 

