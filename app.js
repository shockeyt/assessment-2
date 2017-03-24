console.log("JS is working");

var finn = document.getElementsByClassName(".finndiv");
console.log(finn);

var jake = document.getElementsByClassName(".jakediv");
console.log(jake);

function testFinn() {
	finn.addEventListener('click', function() {
		alert("clicked finn");
	});
}
testFinn();