console.log("JS is working");

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
