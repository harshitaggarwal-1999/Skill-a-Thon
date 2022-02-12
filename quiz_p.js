function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        
        
            var element = document.getElementById("choice" + 0);
            element.innerHTML = choices[0];
            guess("btn" + 0, choices[0]);
            var element = document.getElementById("choice" + 1);
            element.innerHTML = choices[1];
            guess("btn" + 1, choices[1]);
            var element = document.getElementById("choice" + 2);
            element.innerHTML = choices[2];
            guess("btn" + 2, choices[2]);
            var element = document.getElementById("choice" + 3);
            element.innerHTML = choices[3];
            guess("btn" + 3, choices[3]);
            var element = document.getElementById("choice" + 4);
            if(element !== null)
            {
            element.innerHTML = choices[4];
            guess("btn" + 4, choices[4]);
            }
            var element = document.getElementById("choice" + 5);
            if(element !== null)
            {
                element.innerHTML = choices[5];
                guess("btn" + 5, choices[5]);
            }
           
            var element = document.getElementById("choice" + 6);
            if(element !== null)
            {
            element.innerHTML = choices[6];
            guess("btn" + 6, choices[6]);
            }
            var element = document.getElementById("choice" + 7);
            if(element !== null)
            {
            element.innerHTML = choices[7];
            guess("btn" + 7, choices[7]);
            }
            var element = document.getElementById("choice" + 8);
            if(element !== null)
            {
            element.innerHTML = choices[8];
            guess("btn" + 8, choices[8]);
            }
            var element = document.getElementById("choice" + 9);
            if(element !== null)
            {
            element.innerHTML = choices[9];
            guess("btn" + 9, choices[9]);
            }
 
        
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 


 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
this.showBadge(quiz.score);
};
function showBadge(score)
{
    var badge="";
  if(score>=8)
  {
    badge="Gold";
  }
  else if(score>=5 && score<8)
  {
      badge="Silver";
  }
  else{
    badge="Bronze";
  }
  


  var gameOverHTML = "<h2></h2>";
  gameOverHTML += "<h2 id='badgeRes'> Your Badge is : " + badge+ "</h2>";
  var element = document.getElementById("badge");
  element.innerHTML = gameOverHTML;
}
 
// create questions here
var questions = [
    new Question("What is output for − min(''hello world'')", ["e", "a blank space character","w", "None of the above."], "a blank space character"),
    new Question("Select the correct code to create a button under a parent window with command processButton", ["Button(set.text= ''Hello'' )", "Button(window ,text= ''Ok'' ,fg= ''black '')", "Button(window ,text= ''Hello'' ,command=processButton)", "Button(text= ''hello'' ,command=processButton)"], "Button(window ,text= ''Hello'' ,command=processButton)"),
    new Question("Which module is used in python to create Graphics?", ["Turtle", "Canvas","Tkinter", "Graphics"], "Turtle"),
    new Question("Select the correct function among them which can be used to write the data to perform for a binary output?", ["Write", "Output.binary", "Dump", "Binary.output"], "Dump"),
    new Question("Which operator has higher precedence in the following list", ["% Modulus", "& BitWise AND", "**, Exponent", "> Comparison"], "**, Exponent"),
    new Question("What is the output of the following code? str = pynative print (str[1:3])", ["ipy", "yn", "pyn","yna"], "yn"),
    new Question("def a(b, c, d): pass", ["defines a set and initializes it.", "defines a function, which does nothing.", "defines a method, which passes its parameters through.", "defines an empty class."], "defines a function, which does nothing."),
    new Question("Which of the following functions print the output to the console? ", ["echo", "console.log","print", "output"], "print"),
    new Question("What does the function re.match do?", ["matches a pattern at the start of the string", "matches a pattern at any position in the string", "none of the above", "such a function does not exist"], "matches a pattern at the start of the string"),
    new Question("Which of the following function checks that all characters of a string are in upper case?", ["isupper()", "ljust(width[, fillchar])", "join(seq)", "len(string)"], "isupper()")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();