<img src="${questionImage}">






<img src="${questionImage}">

<img src="images/${questionImage}">

airport.jpg\

plane.jpg







answers : ['answer1', 'aws2']

answer1: 'this'

answer2 : 'this"




function rightOrWrong() {
    $('body').on('submit', 'form', function(event) {
...


The problem was rightOrWrong was called twice in the runQuiz, and startQuiz

OK, I think that the logical place for your nextQ() to be called is in the event handler that handles the "Oh No!"  or "Great!" buttons, right? So when people click on those buttons, nextQ() should be called to render the next question. What do you think?