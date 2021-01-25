var start = document.getElementById("start_quiz");
var instruct = document.getElementById("instruction_box");
var q1 = document.getElementById("question1");
var q2 = document.getElementById("question2");
var q3 = document.getElementById("question3");
var q4 = document.getElementById("question4");
var q5 = document.getElementById("question5");
var q6 = document.getElementById("done");
var q7 = document.getElementById("highScore")
var finalScore = document.getElementById("score");
var button1 = document.querySelectorAll(".answer1");
var button2 = document.querySelectorAll(".answer2");
var button3 = document.querySelectorAll(".answer3");
var button4 = document.querySelectorAll(".answer4");
var button5 = document.querySelectorAll(".answer5");
var button6 = document.getElementById("submit");
var button7 = document.getElementById("restartQuiz");
var right1 = document.getElementById("correct1");
var right2 = document.getElementById("correct2");
var right3 = document.getElementById("correct3");
var right4 = document.getElementById("correct4");
var right5 = document.getElementById("correct5");
var timeLeft = 200;



start.addEventListener("click", function () {
  q1.classList.add("activeInfo");
  prepareRead();

});



button1.forEach(element => {
  element.addEventListener("click", function () {
    q2.classList.add("activeInfo")
    timerEl.textContent = timeLeft;
    timeLeft = timeLeft - 20;
  }, 1000);

});

right1.addEventListener("click", function(){
  q2.classList.add("activeInfo")
})



button2.forEach(element => {
  element.addEventListener("click", function () {
    q3.classList.add("activeInfo")
    timerEl.textContent = timeLeft;
    timeLeft = timeLeft - 20;
  }, 1000);

  right2.addEventListener("click", function(){
    q3.classList.add("activeInfo")
  })

});



button3.forEach(element => {
  element.addEventListener("click", function () {
    q4.classList.add("activeInfo")
    timerEl.textContent = timeLeft;
    timeLeft = timeLeft - 20;
  }, 1000);

});

right3.addEventListener("click", function(){
  q4.classList.add("activeInfo")
})



button4.forEach(element => {
  element.addEventListener("click", function () {
    q5.classList.add("activeInfo")
    timerEl.textContent = timeLeft;
    timeLeft = timeLeft - 20;
  }, 1000);

});

right4.addEventListener("click", function(){
  q5.classList.add("activeInfo")
})


button6.addEventListener("click", function(){
    q7.classList.add("activeInfo")
  })






var timerEl = document.getElementById("countdown");

function prepareRead() {
  var timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft;
    finalScore.textContent = timeLeft;
    timeLeft--;

    right5.addEventListener("click", function(){
      q6.classList.add("activeInfo")
      clearInterval(timeInterval);
    
    })

    button5.forEach(element => {
      element.addEventListener("click", function () {
        q6.classList.add("activeInfo")
        timerEl.textContent = timeLeft;
        finalScore.textContent = timeLeft;
        timeLeft = timeLeft - 20;
        clearInterval(timeInterval);
        
        
      });
    
    });

    
  }, 1000);
}






















