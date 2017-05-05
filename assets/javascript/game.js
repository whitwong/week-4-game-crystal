//Call reset function when page is loaded
$(window).load(function(event){
	reset();
});

/*Declare score variables for overall status and print to DOM*/
var win = 0;
var lose = 0;
$("#wins").html(win);
$("#losses").html(lose);

/*Reset function for when game is won or lost*/
function reset() {
	var numberCrystal1 = 0;
	var numberCrystal2 = 0;
	var numberCrystal3 = 0;
	var numberCrystal4 = 0;
	var randNum = 0;
	var crystalValue = 0;
	var counter = 0;
	$("#score").html(counter);

	/*Generate random target number and write to DOM*/
	randNum = $("<div>");
	randNum = Math.floor(Math.random()*101 + 19);
	$("#random-number").html(randNum);
	
	/*Generate random values for each crystal*/
	numberCrystal1 = Math.floor(Math.random()*11 + 1);
	numberCrystal2 = Math.floor(Math.random()*11 + 1);
	numberCrystal3 = Math.floor(Math.random()*11 + 1);
	numberCrystal4 = Math.floor(Math.random()*11 + 1);

	/*Generate crystal images, set values to each image, and write image to DOM*/
	var crystalImage1 = $("<img>");
	crystalImage1.addClass("crystal-image");
	crystalImage1.attr("src", "assets/images/crystal-image1.jpg");
	crystalImage1.attr("value", numberCrystal1);
	$("#crystal1").html(crystalImage1);

	var crystalImage2 = $("<img>");
	crystalImage2.addClass("crystal-image");
	crystalImage2.attr("src", "assets/images/crystal-image2.jpg");
	crystalImage2.attr("value", numberCrystal2);
	$("#crystal2").html(crystalImage2);

	var crystalImage3 = $("<img>");
	crystalImage3.addClass("crystal-image");
	crystalImage3.attr("src", "assets/images/crystal-image3.jpg");
	crystalImage3.attr("value", numberCrystal3);
	$("#crystal3").html(crystalImage3);

	var crystalImage4 = $("<img>");
	crystalImage4.addClass("crystal-image");
	crystalImage4.attr("src", "assets/images/crystal-image4.jpg");
	crystalImage4.attr("value", numberCrystal4);
	$("#crystal4").html(crystalImage4);

	/*Create on-click events to take value of image selections and add together*/
	$(".crystal-image").click(function() {
		//Empty status message on first click of new game
		$("#status").html("");

		//Store the value of "value" and parse back into an integer
		crystalValue = ($(this).attr("value"));
    	crystalValue = parseInt(crystalValue);

    	//Increment counter to keep track of score
    	counter += crystalValue;
    	$("#score").html(counter);

    	//Conditions for winning and losing the game
    	if(counter === randNum){
    		$("#status").html("You win!");
    		win++;
    		$("#wins").html(win);
    		reset();
    	}
    	else if(counter > randNum){
    		$("#status").html("You lost...");
    		lose++;
    		$("#losses").html(lose); 
    		reset();  		
    	}
	});
}