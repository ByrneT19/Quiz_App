let questionNumber = 0;
let scoreNum = 0;

function startQuiz() {
    $('#quiz-start').on('click', function(event) {
        $('#quiz-start').remove();
        $('.questionNumber').text(1);
        $('.scoreNum').text(0);
        $('h2').hide();
        $('h3').show();
        $('.grid', '.zhongGuoImg').show();
        generateQuestion();
        renderQuestion();
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
      <span>${QUESTIONS[questionNumber].answers[0]}</span><br>
      </label>
      <label class="answerOption">
      <input type="radio" value="${QUESTIONS[questionNumber].answers[1]}" name="answer" required>
      <span>${QUESTIONS[questionNumber].answers[1]}</span><br>
      </label>
      <label class="answerOption">
      <input type="radio" value="${QUESTIONS[questionNumber].answers[2]}" name="answer" required>
      <span>${QUESTIONS[questionNumber].answers[2]}</span><br>
      </label>
      <label class="answerOption">
      <input type="radio" value="${QUESTIONS[questionNumber].answers[3]}" name="answer" required>
      <span>${QUESTIONS[questionNumber].answers[3]}</span><br>
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

//generates question image
function generateImage() {  
    $('.china-img').attr('src', `images/${QUESTIONS[questionNumber].questionImage}`);
}

function renderQuestion () {
    $('.grid').html(generateQuestion());
    $('.zhongGuiImg').html(generateImage());
  }

//increments question number
function questionInc() {
    questionNumber++;
    $('.questionNumber').text(questionNumber+1);
};

function score() {
    scoreNum++;
};

//increments score 
function scoreInc() {
    score();
    $('.scoreNum').text(scoreNum);
  };

//checks if answer is right or wrong
function rightOrWrong() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        console.log('click');
        if ($('input[name=answer]:checked').val() == QUESTIONS[questionNumber].correctAnswer) {
            console.log('Correct');
            scoreInc();
            correctReturn();
            $('.zhongGuoImg').hide();
        }else{
            console.log('Wrong')
            wrongReturn();
            $('.zhongGuoImg').hide();
        }
    
    })
};

//creates pop-up box for correct answer
function correctReturn() {
    $('.grid').append('.pop-up-correct').html
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
    $('.grid').append('.pop-up-wrong').html(`
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
    $('.grid').on('click', '.nextQuestion', function() {
        $('.pop-up-correct').hide();
        $('.pop-up-wrong').hide();
        questionInc();
        renderQuestion();
        rightOrWrong();
        $('.zhongGuoImg').show();
    })
    
}

//pop-ups for result function
function exScore() {
    $('body').append(`
    <div class="excellent">
        <p class="resultText">Excellent!</p>
        <p class="pop-up-han">太好<br>了</p>
        <button id="restart">Restart</button>
    </div>
    `)
    .show();
};

function midScore() {
    $('body').append(`
    <div class="ok">
        <p class="resultText">So-So</p>
        <p class="pop-up-han">马马<br>虎虎</p>
        <button id="restart">Restart</button>
    </div>
    `)
    .show();
};

function lowScore() {
    $('body').append(`
    <div class="bad">
        <p class="resultText">Make Effort!</p>
        <p class="pop-up-han">加油</p>
        <button id="restart">Restart</button>
    </div>
    `)
    .show();
}

//tells user their result
function result() {
    if(questionNumber === QUESTIONS.length) {
        const scorePerCent = Math.round(100 * scoreNum/QUESTIONS.length);
        return (scorePerCent >= 70) ? exScore():
                (scorePerCent >=40) ? midScore(): lowScore();
    }
    console.log(scorePerCent);
};

//restarts quiz
function goAgain() {
    $('body').on('click', '#restart', function() {
      location.reload();
        // $('.excellent').remove();
        // $('.ok').remove();
        // $('.bad').remove();
        // // runQuiz();
        // //startQuiz();
        // console.log('#restart');
        // questionNumber = 1;
        // debugger
        // $('.questionNumber').text(1);
        // $('.scoreNum').text(0);
        // $('h2').hide();
        // $('h3').show();
        // $('.grid', '.zhongGuoImg').show();
        // generateQuestion();
        // renderQuestion();
    })
};

function runQuiz() {
    startQuiz();
    rightOrWrong();
    nextQ();
};

$(runQuiz);