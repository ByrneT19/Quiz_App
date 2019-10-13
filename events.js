 //on clicking start: h1 is hidden; form and image both appear
/*if ($(window).width() <= 320) {
    function startQuiz() {
        $('#quiz-start').click('#quiz-start', function(event) {
            $('#quiz-start').hide();
            $('h2').hide();
            $('h3').show();
            $('.Q-prompt').show();
            $('form').show();
            console.log(event);
        })
    }
//}*/

//if ($(window).width() < 1025) {
function startQuiz() {
    $('#quiz-start').click('#quiz-start', function(event) {
        $('#quiz-start').hide();
        $('h2').hide();
        $('h3').show();
        $('.Q-prompt').show();
        $('form').show();
        $('img').show();
        console.log(event);
    })
}
//}

const quizLength = QUESTIONS.length -9;
let currentQuestion = 0;
let scoreNum = 0;
let questNum = 0;

//searches questions.js for 4 random questions
function generateQuestion() {
    const QUESTIONS = [], randomSelection;
    randomSelection = Math.floor((Math.random() * range) +1);
    for( let i = 0; i < 3; i++) {
        if (i > 0) {
            if(QUESTIONS.indexOf(randomSelection) > -1) {
                while (QUESTIONS.indexOf(randomSelection) > -1) {
                randomSelection = Math.floor((Math.random() * range) +1)
            }
        }
    }
    QUESTIONS[i] = randomSelection;
} 
return QUESTIONS;
};


function formCreator() {
    generateQuestion();
    $(`<form>
            <p class="Q-prompt" id="Q-correct">How would you say:<span>${QUESTIONS.question}</span>?</p>
            <input type="radio" name="quest-ans" id="radio-button">${QUESTIONS.correctAnswer}<br>
            <input type="radio" name="quest-ans" id="radio-button">${QUESTIONS.correctAnswer}<br>
            <input type="radio" name="quest-ans" id="radio-button">${QUESTIONS.correctAnswer}<br>
            <input type="radio" name="quest-ans" id="radio-button">${QUESTIONS.correctAnswer}<br>
        </form>`).appendTo('.grid')
};

//will generate the image in the container that is associated with the answer
function displayImage() {
    generateQuestion();
    $(`src="${QUESTIONS.questionImage}" alt="${QUESTIONS.alt}"`).appendTo('.zhongGuoImg');
};

 //if else function provides feedback for right or wrong answers
function popUpBox() {
    $('.radio'[name = 'quest-ans']).submit(function() {
        event.preventDefault;
        console.log(event);
        $('this').on('click', function() {
            if($(this).val() == question) {
                $('.pop-up-correct').show();
                currentQuestion++;
                scoreNum++;
                $('.scoreNum').text();
                generateQuestion();
            } else {
                $('.pop-up-wrong').show();
                currentQuestion++;
                generateQuestion();
            }
        })
    })
    
 //updates which question you are on - link to question submission
function questProg() {
    for( let i = 0; i < QUESTIONS.length; i++) {
        questNum.innerHTML.text++;
    }
};

//updates score - invoked by popUpBox function
/*function userScore() {
    scoreNum++;
    $('.scoreNum').text(Correct);
    console.log(userScore());
};*/

//tells the user how they did via a pop-up box (called from css) with calligraphy:
//3 results excellent 太好了!, so-so 马马虎虎,
//make effort 加油! 
function scoreCard() {
    for(i = 0; i >= 3; i++) {
    const scorePerCent = Math.round(100 * scoreNum/quizLength.length);
    return (scorePerCent >= 70) ? '.excellent'.show:
           (scorePerCent >= 40) ? '.ok'.show: '.bad'.show;   
    }           
};

function runQuiz() {
    startQuiz();
    generateQuestion();
    questProg();
    popUpBox();
    //userScore();
    scoreCard();
};

$(runQuiz);
