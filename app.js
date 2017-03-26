console.log("JS is working");

var player1 = {
	name: "Finn",
	type: "human"
};
var player2 = {
	name: "Jake",
	type: "dog"
};

// function keyDown() {
// 	player1.addEventListener("keydown", function() {
// 		console.log("player one move");
// 	});
// }
// keyDown();

//PLAYERS
var finn = document.querySelector(".finndiv");

console.log(finn);

var jake = document.querySelector(".jakediv");
console.log(jake);

//CLICK EVENT
function testFinn() {
	finn.addEventListener("click", function() {
		alert("clicked finn");
	
});
}
testFinn();

function testJake() {
	jake.addEventListener("click", function() {
		alert("clicked jake");
	
});
}
testJake();

//need to convert these numbers to px strings
var finnmove = 30;
var totalmarginf = 0;
var totalmarginj = 0;
var jakemove = 30;
// number 810 is at end of page
//KEYDOWN EVENT
window.addEventListener("keydown", checkKeyPressed, false);
// window.addEventListener("keypress", dealWithKeyboard, false);
// window.addEventListener("keyup", dealWithKeyboard, false);

	function checkKeyPressed(e) {
    if (e.keyCode == "65") {
    	var string = String(totalmarginf) + 'px';
        // alert("The 'a' key is pressed.");
        
        totalmarginf += finnmove;
        console.log(string);
        finn.style.marginLeft = string;
        // finn.style.marginLeft = totalmargin + finnmove;
    } else if (e.keyCode == "66") {
    	// 'b' key pressed
    	var stringb = String(totalmarginj) + 'px';
    	totalmarginj += jakemove;
    	console.log(stringb);
    	
    	jake.style.marginLeft = stringb;
    }
	
	 function Winner () {
	 	if (string == "810px") {
	 		alert("finn reached 810");
	 	} else if (stringb == "810px") {
	 		alert("jake reached 810");
	 	}
	 }
	 Winner();

	 
 }

 var reset = document.querySelector('.button');
 console.log(reset);
 function resetGame () {
 	reset.addEventListener("click", function() {
 		location.reload();
 		// alert("clicked reset button");
 	});
 	
 }
 resetGame();
// function dealWithKeyboard(e) {
//     // gets called when any of the keyboard events are overheard
    
//     // finn.style.border = "5px solid black";
//     finn.style.marginLeft = "30px";
//     console.log("kedown worked");
// }
