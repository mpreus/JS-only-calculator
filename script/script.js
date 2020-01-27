window.addEventListener("DOMContentLoaded", init);

/* all keys needed in the project: */
const opts = ["*", "/", "+", "-", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "."];
/* special oerations key: */
const spec = ["*", "/", "+", "-",];

function init() {
	document.title = "JavaScript Calculator";

/* container for the calculator */
	const container = document.createElement("div");
	container.classList.add("container");
	container.style.maxWidth = "600px";
	container.style.margin = "auto";
	document.body.appendChild(container);

/* output - space for results of calculations, placed in the 'container': */
	const output = document.createElement("input");
	output.setAttribute("type", "text");
	output.classList.add("output");
	output.style.width = "100%";
	output.style.lineHeight = "50px";
	output.style.fontSize = "3em";
	output.style.textAlign = "right";
	container.appendChild(output);

/* calculator's body element: */
	const main = document.createElement("div");
	main.classList.add("main");
	main.style.width = "100%";
	container.appendChild(main);




}