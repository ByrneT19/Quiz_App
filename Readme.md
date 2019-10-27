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