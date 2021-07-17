function bedroom(){
    window.location("bedroom.html")
}

function backyard(){
    window.location("backyard.html")
}

function garden(){
    window.location("Playground.html")
}







// object=[];
// status="";
// img="";
// function preload(){
// img=loadImage("dog_cat.jpg")
// }

// function setup(){
//     canvas=createCanvas(650, 500)
//     canvas.center();
//     objectDetector=ml5.objectDetector('cocossd', modelLoaded)
//     document.getElementById("status").innerHTML="Detecting objects"
// }

// function modelLoaded(){
// status= true;
// console.log(modelLoaded);
// objectDetector.detect(img, gotResults)
// }

// function gotResults(error, results){
// if(error){
//     console.log(error);
// }
// else{
//     console.log(results);
//     object=results;
//     }
// }

// function draw(){
//     // image(img, 0,0,650,500)
//     if(status!=""){
//     for(var i=0; i<object.length; i++){
//         document.getElementById("status").innerHTML="Detected objects"
//         fill("#fc720f");
//         percent=floor(object[i].confidence*100);
//         text(object[i].label+" "+percent+"%", object[i].x+15,object[i].y+15);
//         noFill()
//         stroke("#fc720f");
//         rect(object[i].x, object[i].y, object[i].width, object[i].height);
//         }
//     }

// }