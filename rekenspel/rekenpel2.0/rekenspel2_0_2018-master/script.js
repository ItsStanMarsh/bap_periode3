const wrapper = document.getElementById("wrapper");
const myAssignment = document.getElementById('myAssignment');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');

let assignments = [];
let counter = 0;
var background = 1;

function init(){
  for (i=0; i<10; i++){
    assignments.push(makeSum());
  }
  assignments[0].myAnswer = 100;

  console.log(assignments);
  console.log(assignments[0].numA);
  console.log(assignments[counter]);

  updateAssignment();

  myAssignment.style.visibility = "hidden";
  myInput.style.visibility = "hidden";
  feedback.style.visibility = "hidden";

}

function inputHandler(evt){
  if (evt.keyCode == 13){
    if (background==1) {
      window.setTimeout(2000);
      document.body.style.backgroundImage = "url('../../images/wp1.jpg')";
      background++;
    } else {
      window.setTimeout(2000);
      document.body.style.backgroundImage = "url('../../images/wp2.jpg')";
      background=1;
    }
    assignments[counter].myAnswer = myInput.value;
    console.log(assignments[counter]);
    counter++;
    myInput.value = "";
    if (counter != 10){
      updateAssignment();
    }else {
      myAssignment.style.display = "none";
      myInput.style.display = "none";
      feedback.style.visibility = "visible";
      updateFeedback();
    }
  }
}
function updateFeedback(){
  for(var i = 0; i<10; i++){
  feedback.innerHTML += assignments[i].numA + " x " + assignments[i].numB + "<br>" + "The right answer is: " + assignments[i].ans + "<br>" + "Your answer was: " + assignments[i].myAnswer + "<br><br>";
  }
}

function updateAssignment(){
  let tempA = assignments[counter].numA + " x " + assignments[counter].numB;
  myAssignment.innerHTML = tempA;
}

function makeSum(){
  let mySum = {};
  mySum.numA = getNumber();
  mySum.numB = getNumber();
  mySum.ans = mySum.numA * mySum.numB;
  return mySum;
}

function evaluate(){

}

function getNumber(){
  let number = Math.floor(Math.random()*9)+1;
  return number;
}

myInput.addEventListener('keydown',inputHandler,false);
init();

var button = document.getElementById('1');
button.addEventListener('click', () => {
  button.style.display = "none";
  myAssignment.style.visibility = "visible";
  myInput.style.visibility = "visible";});
