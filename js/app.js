$(document).ready(function(){
/* -------------- Question Constructor -------------*/
	function newQuestion (q, ans1, ans2, ans3, correctAns/*,  exp*/) {
		this.question = q;
		this.option1 = ans1;
		this.option2 = ans2;
		this.option3 = ans3;
		this.correct = correctAns;
		//this.explanation = exp;
	};
/* -------------- Questions -------------*/
	var questionOne = new newQuestion (
		"The average US driver drives 11,400 miles a year at 21.6 mpg,  How many tons of CO2 does this create?",
		4.7,85,4800,0)

	var questionTwo = new newQuestion (
		"How many tons of CO2 does the average american household emit a year?",
		.25,12,37000,1)

	var questionThree = new newQuestion (
		"The total US total emissions of CO2 in 2014 compared to 2006  are:",
		"1 Billion Tons More", "15,000 Tons More","500 Million Tons Less",2 )

	var questionFour = new newQuestion(
		"On a per person basis, how much more does the US emit than the world average?",
		"15%","85%", "325%",2)

	var questionFive = new newQuestion(
		"Increasing the global temperature by 2C will eventually result in 5 meters of sea rise.  How many people globally live within 5 meters of sea level?",
		"The population of California: 40 million","The population of Brazil 200 million","The population of North America 500 million",2)

	
/* -------------- Global Variables -------------*/
	var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive];
	var gNumberCorrect = 0;
	var gCurrentQuestion = 0;

/* -------------- Key Functions -------------*/
/* 			Set question and 3 answers per current question object */
	function updateQuestion(){
		
		$("#question").text(questionArray[gCurrentQuestion].question);
		$("#answer1").text(questionArray[gCurrentQuestion].option1);
		$("#answer2").text(questionArray[gCurrentQuestion].option2);
		$("#answer3").text(questionArray[gCurrentQuestion].option3);
	}
/* 			Provide results line, remove answer options,
			hide submit button and expose reset button 		*/
	function provideResults(){
		$("#question").text("Congratulation you got " + gNumberCorrect + " out of 5 correct!" );
		for (var i =0; i<3;i++){
			$("#answer"+(i+1)).text(" ");
			$("#"+i).addClass("hidden");
		}
		$("#submit").addClass("hidden");
		$("#retry").removeClass("hidden");
	}

	function updateStatus(){
		 var answer = $("input[type='radio']:checked").attr("id");
		 if (answer==questionArray[gCurrentQuestion].correct){
		 	gNumberCorrect++;
		 	$("#question"+ (gCurrentQuestion+1)).removeClass("fa fa-question-circle");
		 	$("#question"+ (gCurrentQuestion+1)).addClass("fa fa-check-circle correct");
		 }

		 else {
		 	$("#question"+ (gCurrentQuestion+1)).removeClass("fa fa-question-circle");
		 	$("#question"+ (gCurrentQuestion+1)).addClass("fa fa-times-circle incorrect");
		 }
	}
/* -------------- Initial Page Setup -------------*/
	updateQuestion();

/* -------------- Form Handling  -------------*/
/*		Check for Correct Answer
		Reset Answer Form  
		Call followup function depending on question number  */

	$("#answerList").submit(function(e) {
		e.preventDefault();
		updateStatus();
		gCurrentQuestion++;
		$("input[type='radio']:checked").prop("checked",false);
		if(gCurrentQuestion < 5) {updateQuestion();}
		else { provideResults();}
	});

/* 		Reset variables, Reset Status Checks, Reset Quiz to Question 1 */
	$("#answerList").on("click","#retry",function(){
		gCurrentQuestion=0;
		gNumberCorrect=0;
		for (var i = 1; i<6; i++){
			$("#question"+i).removeClass("fa fa-check-circle correct");
			$("#question"+i).removeClass("fa fa-times-circle incorrect");
			$("#question"+i).addClass("fa fa-question-circle");
		}

		for (var i =0; i<3;i++){
			$("#"+i).removeClass("hidden");
		}
		updateQuestion();
	});
	

	
});


/* Images
Question 1:
Before- Car: https://unsplash.com/photos/Bkci_8qcdvQ
After - http://static1.businessinsider.com/image/52af4b48ecad04934a6ee2d9-1200-667/screen%20shot%202013-12-16%20at%201.49.00%20pm.png
Question - The average US driver drives 11,400 miles a year at 21.6 mpg,  How many tons of CO2 does this create?
Answer -  4.7 85 4,800

Question 2:
Before- https://unsplash.com/photos/iOWEyl7sEgY
After - https://www3.epa.gov/climatechange/images/ghgemissions/GHGEmissionsHomeBusiness.png
[Need Header - Graph Title - Residential and Commercial Emissions]
Question - How many tons of CO2 does the average american household emit a year? 
Answers - .25 12 100,000 

Question 3:
Before- Mountains and Trees: https://unsplash.com/photos/Bkci_8qcdvQ
After - https://www3.epa.gov/climatechange/images/ghgemissions/USCO2EmissionsTimeSeries.png
Question - The US total emissions of CO2 are:
Answers - increasing decreasing or staying the same?

Question 4:
Before- https://unsplash.com/photos/iOWEyl7sEgY
After - US per capita: http://i.dailymail.co.uk/i/pix/2014/09/22/article-2764323-21929A6000000578-253_634x413.jpg
Question - On a per person basis, how much more does the US emit than the world average?
Answers - 15% 85% 325% 

Question 5:
Before-Ocean: https://unsplash.com/photos/UklXbPE-Hos
After - https://unsplash.com/photos/AQ8jQo7QULU
Questions - Increasing the global temperature by 2C will eventually result in 5 meters of sea rise.  How many people globally live within 5 meters of sea level?
Answers - The population of California: 40 million  The population of Brazil 200 million  The population of North America 500 million;
 
 
 
 CO2: http://www.pennenergy.com/content/dam/Pennenergy/online-articles/2014/10/co2-emissions.jpg
*/