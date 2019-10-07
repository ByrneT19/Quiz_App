 //on clicking start: h1 is hidden; form and image both appear
 /*if ($(window).width() < 321) {
    $(document).ready(function() {
    $('#quiz-start').click(function() {
        $('#quiz-start').toggle();
        $('h2').toggle();
        $('h3').toggle();
        $('.Q-prompt').toggle();
        $('form').toggle();
    });
});
 }*/

//if ($(window).width() < 1025) {
$(document).ready(function() {
    $('#quiz-start').click(function() {
        $('#quiz-start').toggle();
        $('h2').toggle();
        $('h3').toggle();
        $('.Q-prompt').toggle();
        $('form').toggle();
        $('img').toggle();
        console.log();
    });
});
//}

/*function startQuiz() {
    $('#quiz-start').click(function() {
        $('#quiz-start').toggle();
        $('h2').toggle();
        $('h3').toggle();
        $('form').toggle();
        $('img').toggle();
    })
}*/


/*function generateQuestion() {
    //searches questions.js for 4 random questions
    function selections(question, answer) {
        return {
            question: answer
        }
    };
};
//will generate the image in the container that is associated with the answer, maybe I need two arrays? one
//for images and one for questions?
function displayImage() {
    
};*/

 //if else function provides feedback for right or wrong answers
function popUpBox(submit) {
    $('.radio').submit(function() {
        event.preventDefault;
        console.log(event);
    })
    if('.radio' ==== question) {
        function wellDone(); //wellDone will create a pop-up box with image and calligraphy 太好了。
    } else {
        function wrong(); //wrong will create a pop-up box with image and calligraphy 加油。
    }
};
    
    
 //updates which question you are on
function questProg(questNum) {
    for(i = 0; i < QUESTIONS.length; i++) {
        $('.questNum').text(questNum +1);
    }
};

function userScore() {
    Correct++;
    $('.scoreNum').text(Correct);
    console.log(userScore());
};

//tells the user how they did via a pop-up box with images and calligraphy. 3 results excellent, ok, try again!
function scoreCard() {
    $('').show(quizResult);
    if(score > 8);
     = Excellent!
};

function runQuiz() {
    //runs all of the above
};

$runQuiz(); //runs quiz when everything is loaded*/