

/**
*Runs Game2 when regular is pressed
**/
$(document).ready(function(){
    $("#playReg").click(function(){
		//alert("Testing");
        $("#playReg").hide();
		$("#playHard").hide();
	   Game2.run();
    });
	
});

function cup(containsBall) {
    this.ball = containsBall;
}

/**
*This is the Game object for the Shell Game.
**/
var Game2 = {
	cups: [new cup(false), new cup(true), new cup(false)],
	setUp: function(){
		var container = document.getElementById("gameSpace");
		
		var cup1 = document.createElement("IMG");
		cup1.src = "../imgs/cup.png"
		cup1.setAttribute("id", "cup1");
		container.prepend(cup1);
		
		//var cup2
		//var cup3
	},
	run: function(){
		Game2.setUp();
	}
};
