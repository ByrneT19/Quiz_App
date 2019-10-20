function startQuiz() {
    $('#quiz-start').click('#quiz-start', function(event) {
        $('#quiz-start').hide();
        $('h2').hide();
        $('h3').show();
        ('.grid').hide();
        /*generateQuestion();*/
        console.log(event);
    })
};

let questionNumber = 0;
let scoreNum = 0;

function generateQuestion() {
    $(startQuiz, '.grid').show();
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
    $('#zhongGuoImg').add(`src="url(${QUESTIONS[questionNumber].questionImage})" alt="${QUESTIONS[questionNumber].alt}"`)
};

function runQuiz() {
    startQuiz();
    generateQuestion();
};

$(runQuiz);
