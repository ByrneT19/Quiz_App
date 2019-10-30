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
let Correct = 0;

//generates question, answers and related image
function generateQuestion() {
    if (questionNumber < QUESTIONS.length);
    console.log(questionNumber);{
    $('.grid').html(`
        <form>
            <fieldset class="form-field">
            <p class="Q-prompt">How would you say: <span>${QUESTIONS[questionNumber].question}</span></p>
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
        </form>`) 
    }
    {$('.china-img').attr('src', `images/${QUESTIONS[questionNumber].questionImage}`);}

};

function renderQuestion () {
    $('.grid').html(generateQuestion());
  }
  
//creates pop-up box for correct answer
function correctReturn() {
    $('main').append('.pop-up-correct').html
    (`
    <div class="pop-up-correct">
        <p class="resultText">Correct!</p>
        <!--div class="han-pos"-->
            <p class="pop-up-han">不错</p>
        <!--/div-->
        <button class="nextQuestion">Great!</button>
    </div>
    `)
    .show();
    };

//creates pop-up box for wrong answer
function wrongReturn() {
    $('main').append('.pop-up-wrong').html(`
        <div class="pop-up-wrong">
            <p class="resultText">Incorrect!</p>
            <p class="pop-up-han">错误</p>
            <button class="nextQuestion">Oh No!</button>
        </div>
    `)
    .show();
};

//checks if answer is right or wrong
function rightOrWrong() {
    $('body').on('submit', 'form', function(event) {
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

//generates next question
function nextQ () {
    $('main').on('click', '.nextQuestion', function () {
      renderQuestion();
    });
  }

//pop-ups for result function
function exScore() {
    $('body').append('.excellent').html(`
    <div class="excellent">
        <p class="resultText">Excellent!</p>
        <p class="pop-up-han">太好了</p>
        <button id="restart">Restart</button>
    </div>
    `)
    .show();
};

function midScore() {
    $('body').append('.ok').html(`
    <div class=".ok">
        <p class="resultText">So-So</p>
        <p class="pop-up-han">马马虎虎</p>
        <button id="restart">Restart</button>
    </div>
    `)
    .show();
};

function lowScore() {
    $('body').append('.bad').html(`
    <div class=".bad">
        <p class="resultText">Make Effort!</p>
        <p class="pop-up-han">加油</p>
        <button id="restart">Restart</button>
    </div>
    `)
    .show();
}

//tells user their result
function result() {
    if(questionNumber === QUESTIONS.length - 8) {
        const scorePerCent = Math.round(100 * scoreNum/QUESTIONS.length - 8);
        return (scorePerCent >= 70) ? exScore():
                (scorePerCent >=40) ? midScore(): lowScore();
    }
    console.log(scorePerCent);
};

//restarts quiz
function goAgain() {
    $('body').on('click', '#restart', function() {
        $('.excellent').remove();
        $('.ok').remove();
        $('.bad').remove();
        startQuiz();
        console.log('#restart');
    })
};

function runQuiz() {
    startQuiz();
    renderQuestion();
    nextQ();
    result();
};

$(runQuiz);
