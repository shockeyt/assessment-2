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

//KEYDOWN EVENT
window.addEventListener("keydown", checkKeyPressed, false);
// window.addEventListener("keypress", dealWithKeyboard, false);
// window.addEventListener("keyup", dealWithKeyboard, false);

	function checkKeyPressed(e) {
    if (e.keyCode == "65") {
        // alert("The 'a' key is pressed.");
        finn.style.marginLeft = "30px";
    } else if (e.keyCode == "66") {
    	// 'b' key pressed
    	jake.style.marginLeft = "60px";
    }
	}
 
// function dealWithKeyboard(e) {
//     // gets called when any of the keyboard events are overheard
    
//     // finn.style.border = "5px solid black";
//     finn.style.marginLeft = "30px";
//     console.log("kedown worked");
// }
