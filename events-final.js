function startQuiz() {
    $('#quiz-start').click('#quiz-start', function(event) {
        $('#quiz-start').hide();
        $('h2').hide();
        $('h3').show();
        generateQuestion();
        rightOrWrong();
        console.log(event);
    })
};

let questionNumber = 0;
let scoreNum = 0;
let Correct = 0;

function generateQuestion() {
    if (questionNumber < QUESTIONS.length) 
    console.log(generateQuestion);
    {   
        $('main').prepend
        (`<div class="zhongGuoImg">
            <form>
            <fieldset class="form-field">
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
            <input class="ansSub" type="submit" value="Submit">
            </fieldset>
            </form>
        </div>`)
    } 
        $('.china-img').attr('src', `images/${QUESTIONS[questionNumber].questionImage}`);        
};

//technical assist said don't use scoreNum++ twice
/*function rightOrWrong() {
    $('form').on('submit', function(event) {
        event.preventDefault;
        console.log('click');
        if ($('input[name=answer]:checked').val() == QUESTIONS[questionNumber].correctAnswer) {
            score();
            correctReturn();
        }else{
            wrongReturn();
        }
    })
};*/

function correctReturn() {
$('.pop-up-correct').show
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
$('.pop-up-wrong').show
(`
<div class="pop-up-wrong">
    <p>Incorrect!</p>
    <p class="pop-up-wrong-han">错误</p>
</div>
`)
};

function rightOrWrong() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        console.log('click');
        if ($('input[name=answer]:checked').val() == QUESTIONS[questionNumber].correctAnswer) {
            score();
            correctReturn();
        }else{
            wrongReturn();
        }
    })
};

function runQuiz() {
    startQuiz();
    rightOrWrong();
};

$(runQuiz);
