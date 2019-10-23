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
        $('main').prepend
        (`<div class="zhongGuoImg">
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
        $('.china-img').attr('src', `images/${QUESTIONS[questionNumber].questionImage}`);        
};

/*$(function () {
    $('.showstore').hide();
    $('.showbrand').hide();

    $("input[name=user-type]:radio").click(function () {
        if ($('input[name=user-type]:checked').val() == "Brand") {
            $('.showstore').hide();
            $('.showbrand').show();

        } else if ($('input[name=user-type]:checked').val() == "Store") {
            $('.showstore').show();
            $('.showbrand').hide();

        }
    });            $(addEventListener).click('input[name=answer]:radio', function() {
});*/
function rightOrWrong() {
    $('input[name=answer]:radio').on('click', function() {
        if ($('input[name=answer]:checked').val() == QUESTIONS[questionNumber].correctAnswer) {
            scoreNum++;
            score();
            correctReturn();
        }else{
            wrongReturn();
        }
    })
};

/*function rightOrWrong() {
    $('input[name=answer]:radio').click(function() {
        if ($('input[name = answer]:checked').val() == QUESTIONS[questionNumber].correctAnswer) {
            //answer is correct
            scoreNum++;
            score();
            correctReturn();
            } else {
                wrongReturn();
            }
            //generateQuestion();
    };*/

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
    rightOrWrong();
};

$(runQuiz);
