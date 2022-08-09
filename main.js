img = ""
status = ""
object = []
function setup(){;
 canvas = createCanvas(500, 600);
 canvas.center();
 objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
 document.getElementById("status").innerHTML = "status : Dectecting Objects";
};
function modelLoaded(){
    objectDetector.detect(img ,gotResult);
    status = true;
    console.log("modelLoaded")
}
function gotResult(error , result){
    if(error){
        console.error(error)
    }console.log(result)
    object = result
}
function draw(){
    image(img, 0, 0, 500, 600);
    if( status != ""){
        for ( i=0;i < object.length ;i++){
        document.getElementById("status").innerHTML = "status: object detected"
    fill("red");
     percent = floor(object[i].confidence*100)
    text( object[i].label + " " + percent + "%" ,object[i].x + 15 , object[i].y + 15)
    stroke("red");
    noFill();
    rect( object[i].x, object[i].y, object[i].width, object[i].height);
    }
    }

}
function preload(){
    img = loadImage("dog_cat.jpg");
}