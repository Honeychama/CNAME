



/**
*This is the Game object for rock paper sissors.
**/
var Game1 = {
	//firstName:"John",
	//lastName:"Doe", 
	//age:50, 
	//eyeColor:"blue"
	run : function() {
       //Starts the game
	   alert("Run function");

    },
	playerChoice : function() {
		
		//Random number from 0 to 3
		//represents: 0 : rock , 1 : paper , 2 : sissors
		var compChoice = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

		
		
       //Called when player makes a choice
    }
};

$(document).ready(function(){
    $("#playRPS").click(function(){
		//alert("Testing");
        $("#playRPS").hide();
	   Game1.run();
    });
	
});
 

