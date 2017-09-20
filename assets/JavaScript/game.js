$(document).ready(function() {
    var index = 0;
    var countdownTimer = {
        time : 30,
        reset: function() {
            this.time = 30;
            $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
        },
        start: function() {
            counter = setInterval(countdownTimer.count, 1000);  
        },
        stop: function() {
            clearInterval(counter);
        },
        count: function() {
                countdownTimer.time--;
                console.log(countdownTimer.time);

            if (countdownTimer.time >= 0) {
                $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
            }
            else {
                index++;
                answerWrong();
                countdownTimer.reset();
                if (index < questionArray.length) {
                    loadQuestion(index);
                } else {
                    $(".answerchoice").hide();
                    showScore();
                }
            }
        }
    };

var correct = 0;
var wrong = 0;
var q1 = {
    question : 'WWhat was the license number on the Ghostbusters car?',
    possibleAnswers : ['A. TCIP-2',
                 'B. NCIS-3',
                 'C. ECTO-1',
                 'D. T910-5'],
    flags : [false, false, true, false],
    answer : 'C. ECTO-1'
};

var q2 = {
    question: 'What is the name of the Freelings dog in Poltergeist',
    possibleAnswers: ['A. Spazz',
                 'B. Ebuzz',
                 'C. Carpe',
                 'D. Chance'],
    flags : [false, true, false, false],
    answer : 'Ebuzz'
};

var q3 = {
    question : 'The main street in Back to the Future is also the main street in what other 80s movie?',
    possibleAnswers : ['A. Pretty In Pink',
                 'B. Gremlins',
                 'C. St. Elmos Fire',
                 'D. My Cousin Vinny'],
    flags : [false, true, false, false],
    answer : 'B. Gremlins'
};

var q4 = {
    question : 'In "The Karate Kid" what color did Daniel have to paint Miagis house, as part of his training?',
    possibleAnswers : ['A. Green',
                 'B. Yellow',
                 'C. Brown',
                 'D. Red'],
    flags : [true, false, false, false],
    answer : 'A. Green'
};

var q5 = {
    question : 'What is Indiana Jones main weapon?',
    possibleAnswers : ['A. Gun',
                 'B. Whip',
                 'C. Dagger',
                 'D. Sword'],
    flags : [false, true, false, false],
    answer : 'B. Whip'
};

var q6 = {
    question : 'What is the occupation of Tom Hank character in Bachelor Party?',
    possibleAnswers : ['A. School Bus Driver',
                 'B. Waiter',
                 'C. Cop',
                 'D. Bartender'],
    flags : [true, false, false, false],
    answer : 'A. School Bus Driver'
};

var q7 = {
    question : 'In "St. Elmo\'s Fire," What city does Billy go to at the end?',
    possibleAnswers : ['A. San Fransisco',
                 'B. Chicago',
                 'C. New York',
                 'D. Washington DC'],
    flags : [false, false, true, false],
    answer : 'C. New York'
};

var q8 = {
    question : 'What is the name of the evil spirit in Polterguise?',
    possibleAnswers : ['A. Lucifer',
                 'B. Kane',
                 'C. Death',
                 'D. None of the above'],
    flags : [false, true, false, false],
    answer : 'B. Kane'
};

var q9 = {
    question : 'In the movie "Sixteen Candles," what was Sam\'s grandparents exchange students name',
    possibleAnswers : ['A. Bruce Lee',
                 'B. Lucky Lee Phong',
                 'C. Data',
                 'D. Lucky Duck Dong'],
    flags : [false, false, false, true],
    answer : 'D. Lucky Duck Dong'
};

var q10 = {
    question : 'In the 1983 movie "National Lampoon\'s Vacation," where were the Griswolds headed on their cross country trip?',
    possibleAnswers : ['A. Disney World',
                  'B. Walley World',
                  'C. Gator World',
                  'D. Sea World'],
    flags : [false, true, false, false],
    answer : 'B. Walley World'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
    console.log(questionSelection);
    countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}



function setup() {
    index = 0;
    $('.question').append('<button id="startButton">Start</button>');
    $('#startButton').on('click', function() {
        $(this).hide();
        countdownTimer.start();
        loadQuestion(index);
    });
}       

function getAnswer() {


    $('.answerchoice').on('click', function() {
      console.log('alert', index);
        index++;
        console.log('click', index);
        $(".question").text('');
        $("#buttonA").text('');
        $("#buttonB").text('');
        $("#buttonC").text('');
        $("#buttonD").text('');
        loadQuestion();
    })
}

function answerCorrect() {
    correct++;
    alert("Correct!");
    console.log("correct");
}

function answerWrong() {
    wrong++;
    alert("Incorrect!");
    console.log("wrong");
}

function showScore() {
    $('.question').empty();
    $('.question').append("<h2><p>" + correct + " correct</p></h2>");
    $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
    countdownTimer.stop();
    $('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
    var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
    answerChosen = 'B';
 } else if (this.id == 'buttonC') {
    answerChosen = 'C';
 } else if (this.id == 'buttonD') {
    answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
    answerCorrect();
 } else if (answerChosen == 'A') {
    answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
    answerCorrect();
 } else if (answerChosen == 'B') {
    answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
    answerCorrect();
 } else if (answerChosen == 'C') {
    answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
    answerCorrect();
 } else if (answerChosen == 'D') {
    answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
    loadQuestion(index);
 } else {
    $(".answerchoice").hide();
    showScore();
 }
});


//  $('#start').click(countdownTimer.start);
});