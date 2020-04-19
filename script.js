// I need trivia questions about javascript
// 1> Who invented JavaScript?
// 1.a> Douglas Crockford
// 1.b> Sheryl Sandberg
// 1.c> Brendan Eich --- Answer : C

// 2> question: "Which one of these is a JavaScript package manager?",
// 2.a> Node.js
// 2.b> TypeScript
// 2.c> npm --- Answer : C

// 3> Inside which HTML element do we put the JavaScript?
// 3.a> <javascript>
// 3.b> <scripting>
// 3.c> <js>
// 3.d> <script> --- Answer : D

// 4> What is the correct JavaScript syntax to change the content of the HTML element below?
//<br>//<p id="demo">This is a demonstration.</p>
// 4.a> document.getElementById("demo").innerHTML = "Hello World"; --- Answer : A
// 4.b> document.getElementByName("p").innerHTML = "Hello World";
// 4.c> #demo.innerHTML = "Hello World";
// 4.d> document.getElement("p").innerHTML = "Hello World";

// 5> The external JavaScript file must contain the <script> tag.
// 5.a> True
// 5.b> False --- Answer : B

// 6> How do you write "Hello World" in an alert box?
// 6.a> msg("Hello World");
// 6.b> msgBox("Hello World");
// 6.c> alertBox("Hello World");
// 6.d> alert("Hello World"); --- Answer : D

// 7> How do you write an IF statement in JavaScript?
// 7.a> if i = 5 then
// 7.b> if (i === 5) --- Answer : B
// 7.c> if i === 5 

// 8> How does a FOR loop start?
// 8.a> for (i = 0; i++)
// 8.b> for (i = 1; i < 5)
// 8.c> for (let i = 0; i < 5; i++) --- Answer : C
// 8.d> for i = 1 to 5

// I will need a timer function that will run every second



function timeLeft() {
  // countdown timer
  let timer = 60;
  
  let timerInt = setInterval(function () {
      
    $("#time-left").text("Time Left : " + timer);
    timer--;
        
  }, 1000);
};

//  When calling timeLeft function. be sure to use 
$("#begin-btn").click(function() {
  timeLeft();
  console.log("yes");
});
  
  //miniQuiz();

//