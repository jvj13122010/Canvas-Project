x = 0;
y = 0;
drawCircle = "";
drawRect = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System Is Listening, Please Speak";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The Speech Has Been Recognised As : " + content;
    if (content == "circle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Drawing A Circle";
        drawCircle = "set";

    }
    if (content == "rectangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Drawing A Rectangle";                                             
        drawRect = "set";

    }
    if (content == "increase") {
        x = Math.floor(Math.random() * 1200);
        y = Math.floor(Math.random() * 1200);
        document.getElementById("status").innerHTML = "Increasing Size";                                             
        canvas = canvas.size(1200,1200);
    }
    if (content == "decrease") {
        x = Math.floor(Math.random() * 400);
        y = Math.floor(Math.random() * 400);
        document.getElementById("status").innerHTML = "Decreasing Size";                                             
        canvas = canvas.size(400,400);
    }

}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if (drawCircle == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle Is Drawn";
        drawCircle = "";
    } 
    
    if (drawRect == "set") {
        height = Math.floor(Math.random() * 100);
        width = Math.floor(Math.random() * 80);
        rect(x, y, height, width);
        document.getElementById("status").innerHTML = "Rectangle Is Drawn";
        drawRect = "";
    }



}
