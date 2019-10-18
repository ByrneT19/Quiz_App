function startQuiz() {
    $('#quiz-start').click('#quiz-start', function(event) {
        $('#quiz-start').hide();
        $('h2').hide();
        $('h3').show();
        generateQuestion();
        console.log(event);
    })
};

function generateQuestion() {
    let q = QUESTIONS;
    let radioHTML = "";

    $.each(q, function(index, value) {
        radioHTML += '<label><input type="radio" name="radio_group" value="'+ value + '</label>';
    })
    $("#radio-group").html(radioHTML);
};

function runQuiz() {
    startQuiz();
    generateQuestion();
};

$(runQuiz);
