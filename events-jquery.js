let questionNumber = 0;
let scoreNum = 0;

function startQuiz() {
    $('#quiz-start').on('click', function(event) {
        $('#quiz-start').remove();
        $('.questNum').text(1);
        $('h2').hide();
        $('h3').show();
        generateQuestion();
        rightOrWrong();
        console.log(event);
    })
}

//generate question 
function generateQuestion () {
    if (questionNumber < QUESTIONS.length) {
      return `<div>
      <form >
      <fieldset class="form-field">
      <p>${QUESTIONS[questionNumber].question}</p>
      <label class="answerOption">
      <input type="radio" value="${QUESTIONS[questionNumber].answers[0]}" name="answer" required>
      <span>${QUESTIONS[questionNumber].answers[0]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" value="${QUESTIONS[questionNumber].answers[1]}" name="answer" required>
      <span>${QUESTIONS[questionNumber].answers[1]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" value="${QUESTIONS[questionNumber].answers[2]}" name="answer" required>
      <span>${QUESTIONS[questionNumber].answers[2]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" value="${QUESTIONS[questionNumber].answers[3]}" name="answer" required>
      <span>${QUESTIONS[questionNumber].answers[3]}</span>
      </label>
      <button type="submit" class="ansSub">Submit</button>
      </fieldset>
      </form>
      </div>`;
    } else {
      result();
      goAgain();
    }
  };
  
function generateImage() {  
    generateQuestion();
    $('.china-img').attr('src', `images/${QUESTIONS[questionNumber].questionImage}`);
}

function renderQuestion () {
    $('.grid').html(generateQuestion(), generateImage());
  }

//increments question number
function questionInc() {
    questNum++;
    $('.questNum').text(questNum+1);
};

function score() {
    scoreNum++;
};

//increments score 
function scoreInc() {
    score();
    $('.scoreNum').text(score);
  }

//checks if answer is right or wrong
function rightOrWrong() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        console.log('click');
        if ($('input[name=answer]:checked').val() == QUESTIONS[questionNumber].correctAnswer) {
            console.log('Correct');
            scoreInc();
            correctReturn();
        }else{
            console.log('Wrong')
            wrongReturn();
        }
    })
};

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

//next question
function nextQ() {
    $('main').on('click', '.nextQuestion', function() {
        questionInc();
        renderQuestion();
        rightOrWrong();
    })
}

//progresses quiz
function renderNextQuestion () {
    $('main').on('click', '.nextButton', function () {
      questionInc();
      renderQuestion();
      rightOrWrong();
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
    rightOrWrong();
    renderNextQuestion();
};

$(runQuiz);