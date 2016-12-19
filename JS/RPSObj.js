/**
*Runs Game1 when play is pressed
**/
$(document).ready(function(){
    $("#playRPS").click(function(){
		//alert("Testing");
        $("#playRPS").hide();
	   Game1.run();
    });
	
});

/**
*This is the Game object for rock paper sissors.
**/
var Game1 = {
	//firstName:"John",
	//lastName:"Doe", 
	//age:50, 
	//eyeColor:"blue"
	addButtons: function(){
		var container = document.getElementById("gameBoard");
		
		var button1 = document.createElement("BUTTON");
		var button2 = document.createElement("BUTTON");
		var button3 = document.createElement("BUTTON");
		
		var buttonText1 = document.createTextNode("Rock");
		var buttonText2 = document.createTextNode("Paper");
		var buttonText3 = document.createTextNode("Sissors");
		
		button1.setAttribute("id", "button1");
		button2.setAttribute("id", "button2");
		button3.setAttribute("id", "button3");
		
		button1.appendChild(buttonText1);
		button2.appendChild(buttonText2);
		button3.appendChild(buttonText3);
		
		container.appendChild(button1);
		container.appendChild(button2);
		container.appendChild(button3);
		
	},
	setButtonClicks: function() {
		
		$(document).ready(function(){
			$("#button1").click(function(){
				alert("Rock");
			});
			
		});
		
		$(document).ready(function(){
			$("#button2").click(function(){
				alert("Paper");
			});
			
		});
		
		$(document).ready(function(){
			$("#button3").click(function(){
				alert("Sissors");
			});
			
		});
	},
	createGameBoard: function() {
		var container = document.getElementById("gameSpace");
		var gameBoard = document.createElement("DIV");
		gameBoard.style.color = "blue";
		gameBoard.setAttribute("id", "gameBoard");
		container.appendChild(gameBoard);
	},
	playerChoice : function() {
		
		//Random number from 0 to 3
		//represents: 0 : rock , 1 : paper , 2 : sissors
		var compChoice = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

		
		
       //Called when player makes a choice
    },
	run : function() {
       //Starts the game
	   
	   //alert("Run function");
	   
	   //Create game board
	   Game1.createGameBoard();
	   Game1.addButtons();
	   Game1.setButtonClicks();

		
	   

    }
};

 

