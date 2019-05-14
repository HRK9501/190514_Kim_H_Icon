(() => {
	//stuv
	console.log('fired!');

	//select elements with JaveScript
	
	//setting up a variable using the let heyword,
	//and using a CSS selector to tind the element we want to use.
	//
	//let stores the reference to element as avriable (in memory)
	let svgGraphic = document.querySelector("#badgeSVG");

// functions are reusable pieces of code
// that you can run any time
function logMyId() {
	console.log(this.id);

	this.style.opacity = 0.5;
}


svgGraphic.addEventListener("click", logMyId);

})();
