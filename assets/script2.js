var questionQuiz = document.getElementById('questionQuiz');
var questionTitle = document.getElementById('questionTitle')
var questionSubmit = document.getElementById('questionResults');
var score = document.getElementById('score');
var timer = document.getElementById('timer');
var startQuiz = document.getElementById('startQuiz');

window.onload = function() 
{
  $("#countdown").on("click", stopwatch.countdown);
  $("#stop").on("click", stopwatch.stop);
  $("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);
  $("#answers").on("click", answerClicked)
};

function answerClicked(e) {
  if(e.target.matches('a')) {
    e.stopPropagation()
    console.log(e.currentTarget)
    if(e.target.getAttribute('data-correct') != "true") {
      stopwatch.time -= 5
    }
    currentQuestion++
    //if game is over
    if(currentQuestion >= questions.length) {
      //tell user game is over
      alert('Quiz Complete');
      //stop the time
      stopwatch.stop();
      //hide the q's and ans
      $("#question").hide();
      $("#answers").hide();
      //once game is done, display user's score

      //then ask user to add their name and score and set that to local storage
  
      //as soon as the submit, display all scores with names

    }
    else {
      render()
    }
  }
}

var intervalId;

var clockRunning = false;

var stopwatch = 
{

  time: 60,
  lap: 1,

  reset: function() 
  {
    stopwatch.time = 60;
    stopwatch.lap = 1;

    $("#timer").text("01:00");

    $("#laps").text("");
  },

  start: function() 
  {

    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
        render()
    }
  },
  stop: function() 
  {

    clearInterval(intervalId);
    clockRunning = false;
  },
  countdown: function() 
  {

    //stopwatch.time++;
    //stopwatch.time = stopwatch.time -10;
    stopwatch.time-=10;

    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    $("#timer").text(converted);
  },
  count: function() 
  {
    stopwatch.time--;

    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    $("#timer").text(converted);
  },
  //timeConverter fx this converts the current time to mins and sections with clock format
  timeConverter: function(t) 
  {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    //formats if time <10 s
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    //formats when time is 0
    if (minutes === 0) {
      minutes = "00";
    }
    //formats if min 10
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    //return time with mm:ss
    return minutes + ":" + seconds;
  }
};




//window.setTimeout(function, milliseconds);
var currentQuestion = 0
function render () {
  var question = document.getElementById('question')
  var answers = document.getElementById('answers')
  var questionObj = questions[currentQuestion]

  answers.innerHTML = ''
  question.innerHTML = questionObj.title
  for(var i = 0; i < questionObj.choices.length; i++) {
    if(questionObj.choices[i] == questionObj.answer) {
      answers.innerHTML += '<a class="btn btn-primary btn-md" data-correct="true" href="#" role="button">' + questionObj.choices[i] + '</a>'
    }
    else {
      answers.innerHTML += '<a class="btn btn-primary btn-md" href="#" role="button">' + questionObj.choices[i] + '</a>'
    }
  }
}
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

// startQuiz.onclick = function(){
// window.setTimeout(function, milliseconds);
// }