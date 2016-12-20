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
*Runs Game1 with unlimited tries
**/
$(document).ready(function(){
    $("#playRPSUnlimited").click(function(){
		//alert("Testing");
        $("#playRPSUnlimited").hide();
		numTries = true;
	   Game1.run();
    });
	
});

var totalTries = 3;
var numTries = false;

/**
*This is the Game object for rock paper sissors.
**/
var Game1 = {
	score: 0,
	tries: totalTries, 
	unlimited: numTries, 
	//eyeColor:"blue"
	addCompImage: function(){
		var container = document.getElementById("gameBoard");
		var compImg = document.createElement("IMG");
		compImg.src = "../imgs/tempChoice.png"
		compImg.style.maxWidth = "100%";
		compImg.setAttribute("id", "compImg");
		compImg.style.display = "none";
		container.prepend(compImg);
		
		$("#compImg").fadeIn(500);
		
	},
	addScore: function(){
		var container = document.getElementById("gameBoard");
		
		var scoreContainer = document.createElement("DIV");
		scoreContainer.setAttribute("id", "scoreContainer");
		var score = document.createTextNode("Score : " + Game1.score);
		
		scoreContainer.appendChild(score);
		container.appendChild(scoreContainer);
		
	},
	displayTries : function(){
		var container = document.getElementById("gameBoard");
		var triesContainer = document.createElement("DIV");
		triesContainer.setAttribute("id", "triesContainer");
		if(Game1.unlimited == false)
			var tries = document.createTextNode("Tries : " + Game1.tries);
		else
			var tries = document.createTextNode("Tries : unlimited");

		triesContainer.appendChild(tries);
		container.appendChild(triesContainer);
		
	},
	updateScore : function(){
		var container = document.getElementById("scoreContainer");
		
		while (container.hasChildNodes())
			container.removeChild(container.lastChild);
		
		var score = document.createTextNode("Score : " + Game1.score);
		container.appendChild(score);
	},
	updateTries : function(){
		var container = document.getElementById("triesContainer");
		
		while (container.hasChildNodes())
			container.removeChild(container.lastChild);
		
		var tries = document.createTextNode("Tries : " + Game1.tries);
		container.appendChild(tries);
	},
	update: function(unlimited){
		Game1.updateScore();
		if(unlimited == false){
			Game1.updateTries();
		}
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
				return 0;
			if(user == 1) 
				return 1;
			if(user == 2) 
				return -1;
		}
		if(cmp == 1){
			if(user == 0) 
				return -1;
			if(user == 1) 
				return 0;
			if(user == 2) 
				return 1;
		}
		if(cmp == 2){
			if(user == 0) 
				return 1;
			if(user == 1) 
				return -1;
			if(user == 2) 
				return 0;
		}
	},
	compImgChange : function(cmp){
		if(cmp == 0){
			document.getElementById("compImg").style.display = "none";
			$("#compImg").attr("src","../imgs/rock.jpg");
			$("#compImg").fadeIn(500);
			
		}
		if(cmp == 1){
			document.getElementById("compImg").style.display = "none";
			$("#compImg").attr("src","../imgs/paper.png");
			$("#compImg").fadeIn(500);
		}
		if(cmp == 2){
			document.getElementById("compImg").style.display = "none";
			$("#compImg").attr("src","../imgs/sissors.jpg");
			$("#compImg").fadeIn(500);
		}
		
	},
	//Called when player makes a choice
	playerChoice : function(choice) {
		
		//Random number from 0 to 2
		//represents: 0 : rock , 1 : paper , 2 : sissors
		var compChoice = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
		Game1.compImgChange(compChoice);
		var result = Game1.cmp(compChoice, choice);
		
		//win
		if(result == 1){
			swal("You win!", "", "success")
			Game1.score++;
			if(Game1.unlimited == false)
				Game1.tries--;
			Game1.update(Game1.unlimited);
			if(Game1.tries == 0){
				  swal({
				   title: 'Game Over!',
				   text: "Score: " + Game1.score,
				   type: 'error'
				}, function() {
					window.location.replace("../index.html");
				});
			}
		}
		//lose
		if(result == -1){
			swal("You lose", "", "error");
			if(Game1.unlimited == false)
				Game1.tries--;
			Game1.update(Game1.unlimited);
			if(Game1.tries == 0){
				  swal({
				   title: 'Game Over!',
				   text: "Score: " + Game1.score,
				   type: 'error'
				}, function() {
					window.location.replace("../index.html");
				});
			}
		}
		if(result == 0){
			swal("You tied", "", "error");
			if(Game1.unlimited == false)
				Game1.tries--;
			Game1.update(Game1.unlimited);
			if(Game1.tries == 0){
				swal({
				   title: 'Game Over!',
				   text: "Score: " + Game1.score,
				   type: 'error'
				}, function() {
					window.location.replace("../index.html");
				});
				  
			}
		}
      
    },
	run : function() {
       //Starts the game
	   
	   //alert("Run function");
	   
	   //Create game board
		Game1.createGameBoard();
		Game1.addButtons();
		Game1.setButtonClicks();
		Game1.addCompImage();
		Game1.addScore();
		Game1.displayTries();
		
	
	   

    }
};

 

