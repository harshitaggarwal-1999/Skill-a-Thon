
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
    new Question("Which of the following is not the keyword in C++?", ["Volatile", "friend","this", "extends"], "extends"),
    new Question("What is the built in library function to compare two strings?", ["string_cmp()", "strcmp()", "equals()", "str_compare()"], "strcmp()"),
    new Question("What is the output of the following program? main(){}", ["No Output", "Garbage","Compiletime Error", "Runtime Error"], "No Output"),
    new Question("A trigraph character begins with", ["#", "###", "?", "??"], "?"),
    new Question("Which data type is used to create a variable that should store text?", ["Txt", "String", "myString", "string"], "string"),
    new Question("Which header file lets us work with input and output objects?", ["inputstr", "stream", "iostream","iosstring"], "iostream"),
    new Question("How do you create a function in C++?", ["(functionName)", "functionName()", "functionName.", "functionName[]"], "functionName()"),
    new Question("Which keyword is used to create a class in C++? ", ["MyClass", "className","class", "class()"], "className"),
    new Question("How do you create a reference variable of an existing variable?", ["With the ref word", "With the REF word", "With the * operator", "With the &operator"], "With the * operator"),
    new Question("How do you start writing a while loop in C++?", ["x>y while{", "while x>y {", "while x>y :", "while(x>y){"], "while(x>y){")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();