


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
		
	},
	play: function(){
		
	}
};
