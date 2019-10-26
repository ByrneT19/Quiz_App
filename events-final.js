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

const lastQuestion = QUESTIONS.length - 9;
let questionNumber = 0;
let scoreNum = 0;
let Correct = 0;

function generateQuestion() {
    if (questionNumber < lastQuestion);
    console.log(generateQuestion);
    nextQ();
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

function correctReturn() {
$('main').append('.pop-up-correct').html
(`
<div class="pop-up-correct">
    <p class="resultText">Correct!</p>
    <p class="pop-up-correct-han">不错</p>
    <button class="nextQuestion">Great!</button>
</div>
`)
.show();
};

function score() {
scoreNum++;
$('.scoreNum').text(Correct);
};

function wrongReturn() {
    $('main').append('.pop-up-wrong').html(`
        <div class="pop-up-wrong">
            <p class="resultText">Incorrect!</p>
            <p class="pop-up-wrong-han">错误</p>
            <button class="nextQuestion">Oh No!</button>
        </div>
    `)
    .show();
};

function rightOrWrong() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        console.log('click');
        if ($('input[name=answer]:checked').val() == QUESTIONS[questionNumber].correctAnswer) {
            console.log('Correct');
            score();
            correctReturn();
        }else{
            console.log('Wrong')
            wrongReturn();
        }
    })
};

function nextQ() {
    $('body').on('click', '.nextQuestion', function() {
        $('.pop-up-correct').remove();
        $('.pop-up-wrong').remove();
        if(questionNumber < lastQuestion) {
        QUESTIONS.questionNumber++;
        console.log(QUESTIONS.questionNumber++);
        $('main').prepend(generateQuestion());
        {$('main').append(`<div class="zhongGuoImg">
        <img class="china-img" src="" alt="">
    </div>
    <div class="han">
        <p class="hanzi">学汉语</p>
    </div>`)}
        $('.china-img').attr('src', `images/${QUESTIONS[questionNumber].questionImage}`);
        }
        
    })
}

function runQuiz() {
    startQuiz();
    rightOrWrong();
};

$(runQuiz);
