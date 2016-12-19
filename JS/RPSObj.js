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
	addCompImage: function(){
		var container = document.getElementById("gameBoard");
		var compImg = document.createElement("IMG");
		compImg.src = "../imgs/tempChoice.png"
		compImg.style.maxWidth = "100%";
		compImg.setAttribute("id", "compImg");
		container.prepend(compImg);
		
	},
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
				Game1.playerChoice(0);
			});
			
		});
		
		$(document).ready(function(){
			$("#button2").click(function(){
				Game1.playerChoice(1);
			});
			
		});
		
		$(document).ready(function(){
			$("#button3").click(function(){
				Game1.playerChoice(2);
			});
			
		});
	},
	createGameBoard: function() {
		var container = document.getElementById("gameSpace");
		var gameBoard = document.createElement("DIV");
		gameBoard.style.color = "blue";
		gameBoard.style.textAlign = "center";
		gameBoard.setAttribute("id", "gameBoard");
		container.appendChild(gameBoard);
	},
	cmp : function(cmp, user){
		if(cmp == 0){
			if(user == 0) 
				alert("Tie!");
			if(user == 1) 
				return true;
			if(user == 2) 
				return false;
		}
		if(cmp == 1){
			if(user == 0) 
				return false;
			if(user == 1) 
				alert("Tie!");
			if(user == 2) 
				return true;
		}
		if(cmp == 2){
			if(user == 0) 
				return true;
			if(user == 1) 
				return false;
			if(user == 2) 
				alert("Tie!");
		}
	},
	compImgChange : function(cmp){
		if(cmp == 0){
			var container = document.getElementById("compImg");
			container.src = "../imgs/rock.jpg"
		}
		if(cmp == 1){
			var container = document.getElementById("compImg");
			container.src = "../imgs/paper.png"
		}
		if(cmp == 2){
			var container = document.getElementById("compImg");
			container.src = "../imgs/sissors.jpg"
		}
		
	},
	playerChoice : function(choice) {
		
		//Random number from 0 to 2
		//represents: 0 : rock , 1 : paper , 2 : sissors
		var compChoice = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
		Game1.compImgChange(compChoice);
		var result = Game1.cmp(compChoice, choice);
		
		if(result == true)
			alert("You win!");
		else
			alert("You lose!");
		
       //Called when player makes a choice
    },
	run : function() {
       //Starts the game
	   
	   //alert("Run function");
	   
	   //Create game board
	   Game1.createGameBoard();
	   Game1.addButtons();
	   Game1.setButtonClicks();
	   Game1.addCompImage();

		
	   

    }
};

 

