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


var finn = document.querySelector(".finndiv");

console.log(finn);

var jake = document.querySelector(".jakediv");
console.log(jake);

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


window.addEventListener("keydown", dealWithKeyboard, false);
// window.addEventListener("keypress", dealWithKeyboard, false);
// window.addEventListener("keyup", dealWithKeyboard, false);
 
function dealWithKeyboard(e) {
    // gets called when any of the keyboard events are overheard
    finn.style.border = "5px solid black";
    console.log("kedown worked");
}
