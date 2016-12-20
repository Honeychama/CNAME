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
		compImg.style.display = "none";
		container.prepend(compImg);
		
		$("#compImg").fadeIn(500);
		
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
		}
		//lose
		if(result == -1){
			 swal("You lose", "", "error");
		}
		if(result == 0){
			swal("You tied", "", "error");
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

		
	   

    }
};

 

