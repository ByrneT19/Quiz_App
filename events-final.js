function startQuiz() {
    $('#quiz-start').click('#quiz-start', function(event) {
        $('#quiz-start').hide();
        $('h2').hide();
        $('h3').show();
        generateQuestion();
        console.log(event);
    })
};

let questionNumber = 0;
let scoreNum = 0;

function generateQuestion() {
    if (questionNumber < QUESTIONS.length) 
    console.log(generateQuestion);
    {   
        $('main').append
        (`<div class="grid">
            <form>
            <p class="Q-prompt">How would you say: <span>${QUESTIONS[questionNumber].question}</span>?</p>
            <label class="answerOptions">
            <input type="radio" value="${QUESTIONS[questionNumber].answers[0]}" name="answer" required>
            <span>${QUESTIONS[questionNumber].answers[0]}</span></label><br>
            <label class="answerOptions">
            <input type="radio" value="${QUESTIONS[questionNumber].answers[1]}" name="answer" required>
            <span>${QUESTIONS[questionNumber].answers[1]}</span></label><br>
            <label class="answerOptions">
            <input type="radio" value="${QUESTIONS[questionNumber].answers[2]}" name="answer" required>
            <span>${QUESTIONS[questionNumber].answers[2]}</span></label><br>
            <label class="answerOptions">
            <input type="radio" value="${QUESTIONS[questionNumber].answers[3]}" name="answer" required>
            <span>${QUESTIONS[questionNumber].answers[3]}</span></label><br>
            </form>
        </div>`)
    } 
        $('#zhongGuoImg').attr("src=url(${QUESTIONS[questionNumber].questionImage}");        
};

/*function rightOrWrong() {
    $('.radio'[name = 'answer']).submit(function() {
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
};*/
function rightOrWrong() {
    if('.radio' [name = 'answer'] == QUESTIONS[questionNumber].correctAnswer) {
        //answer is correct
        scoreNum++;
        correctReturn();
        } else {
            wrongReturn();
        }
        generateQuestion++;
        generateQuestion();
    };

function correctReturn() {
$(rightOrWrong).show
(`
<div class="pop-up-correct">
    <p>Correct!</p>
    <p class="pop-up-correct-han">不错</p>
</div>
`);
};
function score() {
scoreNum++;
$('.scoreNum').text(Correct);
};

function wrongReturn() {
$(rightOrWrong).show
(`
<div class="pop-up-wrong">
    <p>Incorrect!</p>
    <p class="pop-up-wrong-han">错误</p>
</div>
`)
};

function runQuiz() {
    startQuiz();
    //rightOrWrong();
};

$(runQuiz);
