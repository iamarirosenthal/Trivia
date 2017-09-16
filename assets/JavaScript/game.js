$(document).ready(function() {

	//this section is coding for the timer
	var index = 0; 
	var countdownTimer = {
		time : 30,
		reset : function() {
			this.time = 30; 
			$('.timer').html('<h3>' + this.time + 'seconds remaining</h3>' ); 
		},
		start: function() {
			count = setInterval(countdownTimer.count, 1000); 
		}, 
		  stop: function() {
		  	clearInterval(counter); 
	    },
	     count: function() {
	     	             countdownTimer.time--;
	     	             console.log(countdownTimer.time);
	     	          //   $('.timer').html(countdownTimer.time);
	     	           if(countdownTimer.time >= 0) {
	     	           		$('.timer').html('<h3>' + countdownTimer + 'seconds remaining</h3>');

	     	           }
	     	           else {

	     	           		index++;
	     	           		answerWrong();
	     	           		countdownTimer.reset();
	     	           		if (index < questionArray.length) {
	     	           					loadQuestion(index); 

	     	           		}else {

	     	           			  $(".answerChoice").hide(); 
	     	           			  showScore(); 
	     	           		}

	     	           }
	          
	           }

	      }

     }; 

     var correct = 0; 
     var wrong = 0; 
     var q1 = {

     	question: "What year was Fast Times at Ridgemont High released?"
     	possibleAnswer : ["A. 1983", 
     						    "B. 1988",
     							"C. 1988",
     							"D. 1982"],
        flags : [false, false, false, true],
        answer : "D. 1982"
     }; 

    var q2 = {
    	question: "What was Chunk's real name in The Goonies?"
    	possibleAnswer : ["A. Laurence Chunk Cohen", 
     						    "B. James Chunk Roberts",
     							"C. Tommy Chunk Blanks",
     							"D. Data Chunk Li"],
        flags : [true, false, false, false],
        answer : "A. Laurence Chunk Cohen"
    }; 

    var q3 = {
    	question: "What is the name of the airline that operates the ill-fated flight from LA to Chicago in the movie Airplane?"
    	possibleAnswer : ["A. Pan Am Airline", 
     						    "B. American Wings",
     							"C. Trans American",
     							"D. Intercontinental Express"],
        flags : [false, false, true, false],
        answer : "C. Trans American"
    }; 

    var q4 = {
    	question: "In the movie The Goonies what brand of candybar did Chunk try to give to Sloth?"
    	possibleAnswer : ["A. Butter Finger", 
     						    "B. Nestle Crunch",
     							"C. Baby Ruth",
     							"D. Milky Way"],
        flags : [false, false, true, false],
        answer : "C. Baby Ruth"
    }; 

    var q5 = {
    	question: "In The Karate Kid what color did Daniel have to paint Miagi's house, as part of his training."
    	possibleAnswer : ["A. Brown", 
     						    "B. Red",
     							"C. Blue",
     							"D. Green"],
        flags : [false, false, false, true],
        answer : "D. Green"
    }; 

    var q6 = {
    	question: "What does Ally Sheedy say she likes to drink in the Breakfast Club?"
    	possibleAnswer : ["A. Iced Tea", 
     						    "B. Milk",
     							"C. Vodka",
     							"D. Mimosa"],
        flags : [false, false, true, false],
        answer : "C. Vodka"
    }; 

    var q7 = {
    	question: "What was the license number on the Ghostbusters' car?" 
    	possibleAnswer : ["A. Booo-1", 
     						    "B. ECTO-1",
     							"C. SCRD-1",
     							"D. ED3C4"],
        flags : [false, true, false, false],
        answer : "B. ECTO-1"
    }; 

    var q8 = {
    	question: "In Grease Two what does stephanie want in a boyfriend?"
    	possibleAnswer : ["A. Hard Worker", 
     						    "B. Nerd",
     							"C. A Cool Rider",
     							"D. Just to be single"],
        flags : [false, false, true, false],
        answer : "C. A Cool Rider"
    }; 

    var q9 = {
    	question: "In National Lampoon's Vacation, what did the Griswalds call their ugly green station wagon?"
    	possibleAnswer : ["A. The Family Truckster", 
     						    "B. The Giswaldster",
     							"C. The Griswagon",
     							"D. The Wagster"],
        flags : [true, false, false, false],
        answer : "A. The Family Truckster"
    }; 

    var q10 = {
    	question: "What fraternity do the Lewis and Gilbert join in Revenge of the Nerds?"
    	possibleAnswer : ["A. Alpha Beta Capa", 
     						    "B. Alpha Alpha Alpha",
     							"C. Lambda Lambda Lambda",
     							"D. The Royal Alpha Males"],
        flags : [false, false, true, false],
        answer : "C. Lambda Lambda Lamda"
    }; 

   var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]; 
   

















