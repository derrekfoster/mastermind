
var width;
var height;

var player1;
var player2;
var player3;
var player4;

var tries;

var cpu1;
var cpu2;
var cpu3;
var cpu4;

var scale = 100;

window.onload = function() {
	setup();
}

window.onresize = function() {
	resize();
}

function setup() {
	initialValues();
	detectSize();	
	/*
	console.log("cpu1 = "+cpu1);
	console.log("cpu2 = "+cpu2);
	console.log("cpu3 = "+cpu3);
	console.log("cpu4 = "+cpu4);
	*/
	loadGameboard();
}

function loadGameboard() {
	document.getElementById("gameContainer").innerHTML = "<img id='cpuavatar' src='images/transparency.png' width="+width+" height="+height+"/>" + 
		"<img id='cpu1' src='images/question.png' width="+width+" height="+height+"/>" +
		"<img id='cpu2' src='images/question.png' width="+width+" height="+height+"/>" + 
		"<img id='cpu3' src='images/question.png' width="+width+" height="+height+"/>" +
		"<img id='cpu4' src='images/question.png' width="+width+" height="+height+"/>" + 
		"<img id='resize' src='images/scale.png' width="+width+" height="+height+"/>" +
		"<br>" + 
		"<img id='cpugap' src='images/transparency.png' width="+width+" height="+height+"/>" +
		"<br>" + 
		"<img id='accuracy1' src='images/hole.png' width="+width/2+" height="+height/2+"/>" +
		"<img id='accuracy2' src='images/hole.png' width="+width/2+" height="+height/2+"/>" + 
		"<img id='accuracy3' src='images/hole.png' width="+width/2+" height="+height/2+"/>" +
		"<img id='accuracy4' src='images/hole.png' width="+width/2+" height="+height/2+"/>" + 
		"<img id='player1' src='images/"+playerToColour(player1)+".png' width="+width+" height="+height+"/>" +
		"<img id='player2' src='images/"+playerToColour(player2)+".png' width="+width+" height="+height+"/>" +
		"<img id='player3' src='images/"+playerToColour(player3)+".png' width="+width+" height="+height+"/>" +
		"<img id='player4' src='images/"+playerToColour(player4)+".png' width="+width+" height="+height+"/>" +
		"<img id='done' src='images/doneGreyed.png' width="+width+" height="+height+"/>";

	
	document.getElementById("cpu1").style.padding = "10px 0px 0px 0px";
	
	document.getElementById("accuracy1").style.position = "absolute";
	document.getElementById("accuracy2").style.position = "absolute";
	document.getElementById("accuracy2").style.left = width/2+"px";
					
	document.getElementById("player1").onclick = function() {touched(1)};
	document.getElementById("player2").onclick = function() {touched(2)};
	document.getElementById("player3").onclick = function() {touched(3)};
	document.getElementById("player4").onclick = function() {touched(4)};
	document.getElementById("done").onclick = function() {touched(5)};
	document.getElementById("resize").onclick = function() {scaleScreen()};
					
}

function resize() {

	detectSize();
	var size = tries;
	
	if (player1 == cpu1 && player2 == cpu2 && player3 == cpu3 && player4 == cpu4) {
		size -= 1;
	}
	
	for (var i = 1; i <= size; i++) {
		document.getElementById("accuracy1-"+i).width = width/2;
		document.getElementById("accuracy1-"+i).height = height/2;
		document.getElementById("accuracy2-"+i).width = width/2;
		document.getElementById("accuracy2-"+i).height = height/2;
		document.getElementById("accuracy2-"+i).style.left = width/2+"px";
		document.getElementById("accuracy3-"+i).width = width/2;
		document.getElementById("accuracy3-"+i).height = height/2;
		document.getElementById("accuracy4-"+i).width = width/2;
		document.getElementById("accuracy4-"+i).height = height/2;
		document.getElementById("player1-"+i).width = width;
		document.getElementById("player1-"+i).height = height;
		document.getElementById("player2-"+i).width = width;
		document.getElementById("player2-"+i).height = height;
		document.getElementById("player3-"+i).width = width;
		document.getElementById("player3-"+i).height = height;
		document.getElementById("player4-"+i).width = width;
		document.getElementById("player4-"+i).height = height;
		document.getElementById("done-"+i).width = width;
		document.getElementById("done-"+i).height = height;
	}
	
	document.getElementById("cpuavatar").width = width;
	document.getElementById("cpuavatar").height = height;
	document.getElementById("cpu1").width = width;
	document.getElementById("cpu1").height = height;
	document.getElementById("cpu2").width = width;
	document.getElementById("cpu2").height = height;
	document.getElementById("cpu3").width = width;
	document.getElementById("cpu3").height = height;
	document.getElementById("cpu4").width = width;
	document.getElementById("cpu4").height = height;
	document.getElementById("resize").width = width;
	document.getElementById("resize").height = height;	
	document.getElementById("cpugap").width = width;
	document.getElementById("cpugap").height = height;
	document.getElementById("accuracy1").width = width/2;
	document.getElementById("accuracy1").height = height/2;
	document.getElementById("accuracy2").width = width/2;
	document.getElementById("accuracy2").height = height/2;
	document.getElementById("accuracy2").style.left = width/2+"px";
	document.getElementById("accuracy3").width = width/2;
	document.getElementById("accuracy3").height = height/2;
	document.getElementById("accuracy4").width = width/2;
	document.getElementById("accuracy4").height = height/2;
	document.getElementById("player1").width = width;
	document.getElementById("player1").height = height;
	document.getElementById("player2").width = width;
	document.getElementById("player2").height = height;
	document.getElementById("player3").width = width;
	document.getElementById("player3").height = height;
	document.getElementById("player4").width = width;
	document.getElementById("player4").height = height;
	document.getElementById("done").width = width;
	document.getElementById("done").height = height;
	
	if (document.getElementById("tries") !== null) {
		document.getElementById("tries").style.fontSize = width+"px";
		document.getElementById("gameOver").width = width*2;
		document.getElementById("gameOver").height = height;
	}
	
}


function detectSize() {
	if (scale == 100) {
		width = Math.floor(window.innerWidth/6)-3;
	}
	else if (scale == 75) {
		width = Math.floor(window.innerWidth/6)-3;
		width = Math.floor(width*0.75);
	}
	else if (scale == 50) {
		width = Math.floor(window.innerWidth/6)-3;
		width = Math.floor(width*0.5);
	}
	else if (scale == 25) {
		width = Math.floor(window.innerWidth/6)-3;
		width = Math.floor(width*0.25);
	}
	
	//if (width > 100) {
	//	width = 100;
	//}
	height = width;
	console.log("width = "+width);
}


function touched(i) {
	if (i == 1) {
		player1++;
		if (player1 >= 7) {
			player1 = 0;
		}
		document.getElementById("player1").src = "images/"+playerToColour(player1)+".png";
	}
	else if (i == 2) {
		player2++;
		if (player2 >= 7) {
			player2 = 0;
		}
		document.getElementById("player2").src = "images/"+playerToColour(player2)+".png";
	}
	else if (i == 3) {
		player3++;
		if (player3 >= 7) {
			player3 = 0;
		}
		document.getElementById("player3").src = "images/"+playerToColour(player3)+".png";
	}
	else if (i == 4) {
		player4++;
		if (player4 >= 7) {
			player4 = 0;
		}
		document.getElementById("player4").src = "images/"+playerToColour(player4)+".png";
	}
	else if (i == 5) {
		if (player1 > 0 && player2 > 0 && player3 > 0 && player4 > 0) {
			newLine();
		}
	}
	
	if (player1 > 0 && player2 > 0 && player3 > 0 && player4 > 0) {
		document.getElementById("done").src = "images/done.png";
	}
	else {
		document.getElementById("done").src = "images/doneGreyed.png";
	}
}

function playerToColour(player) {
	if (player == 0) {
		return "holeLarge";
	}
	else if (player == 1) {
		return "redMarker";
	}
	else if (player == 2) {
		return "yellowMarker";
	}
	else if (player == 3) {
		return "greenMarker";
	}
	else if (player == 4) {
		return "blueMarker";
	}
	else if (player == 5) {
		return "purpleMarker";
	}
	else if (player == 6) {
		return "whiteMarker";
	}	
}

function newLine() {

	tries++;
	
	if (verifyWin() == false) {

		document.getElementById("accuracy1").id = "accuracy1-"+tries;
		document.getElementById("accuracy2").id = "accuracy2-"+tries;
		document.getElementById("accuracy3").id = "accuracy3-"+tries;
		document.getElementById("accuracy4").id = "accuracy4-"+tries;
		document.getElementById("player1").onclick = false;
		document.getElementById("player1").id = "player1-"+tries;
		document.getElementById("player2").onclick = false;
		document.getElementById("player2").id = "player2-"+tries;
		document.getElementById("player3").onclick = false;
		document.getElementById("player3").id = "player3-"+tries;
		document.getElementById("player4").onclick = false;
		document.getElementById("player4").id = "player4-"+tries;
		document.getElementById("done").src = "images/doneGreyed.png";
		document.getElementById("done").onclick = false;
		document.getElementById("done").id = "done-"+tries;

		document.getElementById("gameContainer").innerHTML += "<br>" + 
			"<img id='accuracy1' src='images/hole.png' width="+width/2+" height="+height/2+"/>" +
			"<img id='accuracy2' src='images/hole.png' width="+width/2+" height="+height/2+"/>" + 
			"<img id='accuracy3' src='images/hole.png' width="+width/2+" height="+height/2+"/>" +
			"<img id='accuracy4' src='images/hole.png' width="+width/2+" height="+height/2+"/>" + 
			"<img id='player1' src='images/"+playerToColour(player1)+".png' width="+width+" height="+height+"/>" +
			"<img id='player2' src='images/"+playerToColour(player2)+".png' width="+width+" height="+height+"/>" +
			"<img id='player3' src='images/"+playerToColour(player3)+".png' width="+width+" height="+height+"/>" +
			"<img id='player4' src='images/"+playerToColour(player4)+".png' width="+width+" height="+height+"/>" +
			"<img id='done' src='images/doneGreyed.png' width="+width+" height="+height+"/>";

		document.getElementById("accuracy1").style.position = "absolute";
		document.getElementById("accuracy2").style.position = "absolute";
		document.getElementById("accuracy2").style.left = width/2+"px";
		
		document.getElementById("player1").onclick = function() {touched(1)};
		document.getElementById("player2").onclick = function() {touched(2)};
		document.getElementById("player3").onclick = function() {touched(3)};
		document.getElementById("player4").onclick = function() {touched(4)};
		document.getElementById("done").onclick = function() {touched(5)};
		document.getElementById("resize").onclick = function() {scaleScreen()};
				
	}
	else {
		gameOver();
	}
	
	window.scrollTo(0,document.body.scrollHeight);
		
}

function getRandom() {
	return (Math.floor(Math.random() * Math.floor(6))+1);
}

function verifyWin() {
	
	/*
	console.log("cpu1 = "+cpu1+" cpu2 = "+cpu2+" cpu3 = "+cpu3+" cpu4 = "+cpu4);
	console.log("  p1 = "+player1+"   p2 = "+player2+"   p3 = "+player3+"   p4 = "+player4);
	*/
	
	var exacts = 0;
	var nears = 0;
	var wrongs = 0;
	
	var used1 = false;
	var used2 = false;
	var used3 = false;
	var used4 = false;
	
	if (player1 == cpu1) {
		used1 = true;
		exacts++;
	}
	if (player2 == cpu2) {
		used2 = true;
		exacts++;
	}
	if (player3 == cpu3) {
		used3 = true;
		exacts++;
	}
	if (player4 == cpu4) {
		used4 = true;
		exacts++;
	}
		
	if (exacts == 1) {
		document.getElementById("accuracy1").src = "images/correct.png";
	}
	if (exacts == 2) {
		document.getElementById("accuracy1").src = "images/correct.png";
		document.getElementById("accuracy2").src = "images/correct.png";
	}
	if (exacts == 3) {
		document.getElementById("accuracy1").src = "images/correct.png";
		document.getElementById("accuracy2").src = "images/correct.png";
		document.getElementById("accuracy3").src = "images/correct.png";
	}
	if (exacts == 4) {
		document.getElementById("accuracy1").src = "images/correct.png";
		document.getElementById("accuracy2").src = "images/correct.png";
		document.getElementById("accuracy3").src = "images/correct.png";
		document.getElementById("accuracy4").src = "images/correct.png";
	}
	
	used = exacts+1;
	if (player1 != cpu1) {
		if (player1 == cpu2 && used2 == false) {
			document.getElementById("accuracy"+used).src = "images/misplaced.png";
			used2 = true;
			//console.log("locking used2 b/c of player1 == cpu2");
			used++;
		}
		else if (player1 == cpu3 && used3 == false) {
			document.getElementById("accuracy"+used).src = "images/misplaced.png";
			used3 = true;
			//console.log("locking used3 b/c of player1 == cpu3");
			used++;
		}
		else if (player1 == cpu4 && used4 == false) {
			document.getElementById("accuracy"+used).src = "images/misplaced.png";
			used4 = true;
			//console.log("locking used4 b/c of player1 == cpu4");
			used++;
		}
	}
	if (player2 != cpu2) {
		if (player2 == cpu1 && used1 == false) {
			document.getElementById("accuracy"+used).src = "images/misplaced.png";
			used1 = true;
			//console.log("locking used2 b/c of player2 == cpu1");
			used++;
		}
		else if (player2 == cpu3 && used3 == false) {
			document.getElementById("accuracy"+used).src = "images/misplaced.png";
			used3 = true;
			//console.log("locking used3 b/c of player2 == cpu3");
			used++;
		}
		else if (player2 == cpu4 && used4 == false) {
			document.getElementById("accuracy"+used).src = "images/misplaced.png";
			used4 = true;
			//console.log("locking used4 b/c of player2 == cpu4");
			used++;
		}
	}
	if (player3 != cpu3) {
		if (player3 == cpu1 && used1 == false) {
			document.getElementById("accuracy"+used).src = "images/misplaced.png";
			used1 = true;
			//console.log("locking used1 b/c of player3 == cpu1");
			used++;
		}
		else if (player3 == cpu2 && used2 == false) {
			document.getElementById("accuracy"+used).src = "images/misplaced.png";
			used2 = true;
			//console.log("locking used2 b/c of player3 == cpu2");
			used++;
		}
		else if (player3 == cpu4 && used4 == false) {
			document.getElementById("accuracy"+used).src = "images/misplaced.png";
			used4 = true;
			//console.log("locking used4 b/c of player3 == cpu4");
			used++;
		}
	}
	if (player4 != cpu4) {
		if (player4 == cpu1 && used1 == false) {
			document.getElementById("accuracy"+used).src = "images/misplaced.png";
			used1 = true;
			//console.log("locking used1 b/c of player4 == cpu1");
			used++;
		}
		else if (player4 == cpu2 && used2 == false) {
			document.getElementById("accuracy"+used).src = "images/misplaced.png";
			//console.log("locking used2 b/c of player4 == cpu2");
			used2 = true;
			used++;
		}
		else if (player4 == cpu3 && used3 == false) {
			document.getElementById("accuracy"+used).src = "images/misplaced.png";
			//console.log("locking used3 b/c of player4 == cpu3");
			used3 = true;
			used++;
		}
	}
	
	if (used == 1) {
		document.getElementById("accuracy1").src = "images/wrong.png";
		document.getElementById("accuracy2").src = "images/wrong.png";
		document.getElementById("accuracy3").src = "images/wrong.png";
		document.getElementById("accuracy4").src = "images/wrong.png";
	}
	else if (used == 2) {
		document.getElementById("accuracy2").src = "images/wrong.png";
		document.getElementById("accuracy3").src = "images/wrong.png";
		document.getElementById("accuracy4").src = "images/wrong.png";
	}
	else if (used == 3) {
		document.getElementById("accuracy3").src = "images/wrong.png";
		document.getElementById("accuracy4").src = "images/wrong.png";
	}
	else if (used == 4) {
		document.getElementById("accuracy4").src = "images/wrong.png";
	}
	
	
	
	if (exacts == 4) {
		document.getElementById("cpu1").src = "images/"+playerToColour(cpu1)+".png";
		document.getElementById("cpu2").src = "images/"+playerToColour(cpu2)+".png";
		document.getElementById("cpu3").src = "images/"+playerToColour(cpu3)+".png";
		document.getElementById("cpu4").src = "images/"+playerToColour(cpu4)+".png";
		return true;
	}
	else {
		return false;
	}
}

function gameOver() {
	document.getElementById("gameContainer").innerHTML += "<br>" + 
		"<div id='tries'>Tries : "+tries+" " +
		"<img id='gameOver' src='images/playAgain.png' width="+width*2+" height="+height+"/></div>";	
		
	document.getElementById("gameOver").style.position = "absolute";		
	//document.getElementById("gameOver").style.right = "10px";
	
	document.getElementById("tries").style.color = "black";
	document.getElementById("tries").style.fontSize = (width-10)+"px";
	
	document.getElementById("gameOver").onclick = function() {setup()};
	document.getElementById("resize").onclick = function() {scaleScreen()};
}

function initialValues() {
	player1 = 0;
	player2 = 0;
	player3 = 0;
	player4 = 0;

	tries = 0;

	cpu1 = getRandom();
	cpu2 = getRandom();
	cpu3 = getRandom();
	cpu4 = getRandom();
	
}

function scaleScreen() {
	scale -= 25;
	if (scale <= 25) {
		scale = 100;
	}
	resize();
}
