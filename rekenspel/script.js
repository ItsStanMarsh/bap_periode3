const wrapper = document.getElementById("wrapper");
const myAssignment = document.getElementById("myAssignment");
const myAnswer = document.getElementById("myAnswer");
const feedBack = document.getElementById("feedback");

let mySum;
let sound = new Audio();
var background = 1;

function makeSum(){
  var a = Math.floor(Math.random() * 9 + 1);
  var b = Math.floor(Math.random() * 9 + 1);
  mySum = a + " * " + b;
  myAssignment.innerHTML = mySum;
  myAnswer.focus();
}

function keyPressed(evt){
  if (evt.keyCode == 13){
		if (background==1) {
      window.setTimeout(2000);
			document.body.style.backgroundImage = "url('images/background2.jpg')";
			background++;
		} else {
      window.setTimeout(2000);
			document.body.style.backgroundImage = "url('images/background.jpg')";
			background=1;
		}
    if (eval(mySum) == myAnswer.value){
      feedback.src = "images/thumbsup.gif";
      sound.src = "images/";
      sound.play();
    }else {
      feedBack.src = "images/bad.gif";
      sound.src = "images/";
      sound.play();
    }
    window.setTimeout(waiting, 2000);
  }
}

function waiting(){
  feedBack.src = "images/exited.gif"
  myAnswer.value = "";
  makeSum();
}

makeSum();
myAnswer.addEventListener("keydown", keyPressed, false);
