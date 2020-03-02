var questionQuiz = document.getElementById('questionQuiz');
var questionTitle = document.getElementById('questionTitle')
var questionSubmit = document.getElementById('questionResults');
var score = document.getElementById('score');
var timer = document.getElementById('timer');
var startQuiz = document.getElementById('startQuiz');

window.onload = function() 
{
  $("#lap").on("click", stopwatch.recordLap);
  $("#stop").on("click", stopwatch.stop);
  $("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);
};

var intervalId;

var clockRunning = false;

var stopwatch = 
{

  time: 0,
  lap: 1,

  reset: function() 
  {
    stopwatch.time = 0;
    stopwatch.lap = 1;

    $("#display").text("00:00");

    $("#laps").text("");
  },

  start: function() 
  {

    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
  },
  stop: function() 
  {

    clearInterval(intervalId);
    clockRunning = false;
  },
  recordLap: function() 
  {

    var converted = stopwatch.timeConverter(stopwatch.time);

    $("#laps").append("<p>Lap " + stopwatch.lap + " : " + converted + "</p>");

    stopwatch.lap++;
  },
  count: function() 
  {
    stopwatch.time++;

    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    $("#display").text(converted);
  },
  timeConverter: function(t) 
  {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};

function mult(x,y){
  return x*y;
}

var results=mult(2,4);

function displayArr(userArr){
  for(var i=0;i<userArr.length;i++){
    console.log(userArr[i]);
  }
}

var NumArr= [1,2,3,4];

displayArr(NumArr);
var StrArr= ['a','b'];

displayArr(StrArr);

window.setTimeout(function, milliseconds);

var questions = [
  {
      title: "What does HTML stand for?",
      choices: ["Hyper Trainer Marking Language", "HyperText Marketing Language", "HyperText Markup Language", "HyperText Markup Leveler"],
      answer: "Hyper Text Markup Language"
  },
  {
      title: "What is the name of the stylesheet that defines the presentation of an HTML or XML document?",
      choices: ["CSS", "PHP", "jQuery", "JavaScript"],
      answer: "CSS"
  },
  {
      title: "What is the language or list of instructions that are executed by the computer (how JavaScript is built)?",
      choices: ["Syntax", "Output", "Scope", "JSON"],
      answer: "Syntax"
  },
  {
      title: "What does CSS stand for?",
      choices: ["Computer Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
      answer: "Cascading Style Sheets"
  },
  {
      title: "Who is your favorite Northwestern Coding Bootcamp TA or teacher?",
      choices: ["Chris", "Jimi", "Nick", "All of the Above"],
      answer: "All of the Above"
  },
]

function showQuestion(){
  questionTitle.innerHTML = questions[0].title
}
function showChoices(){
  questionChoices.innerHTML = questions[1].choices
}
function showAnswer(){
  questionAnswer.innerHTML = questions[2].answer
}
startQuiz.onclick = function(){
window.setTimeout(function, milliseconds);
}