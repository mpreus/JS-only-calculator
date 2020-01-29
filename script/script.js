window.addEventListener("DOMContentLoaded", init);

/* all keys needed in the project: */
const opts = ["*", "/", "+", "-", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "."];
/* special operations key: */
const specChar = ["*", "/", "+", "-",];


function init() {
	document.title = "JavaScript Calculator";
/* background */
	const body = document.getElementsByTagName("body");
	body[0].style.backgroundColor = "#e1e6cf";
/* for evoiding many decimal dots in one number: */
	let decimal = false;
	let evaluation = false;

/* container for calculator */
	const container = document.createElement("div");
	container.classList.add("container");
	container.style.maxWidth = "600px";
	container.style.margin = "auto";
	container.style.border = "1px solid grey";
	container.style.borderRadius = "5px";
	document.body.appendChild(container);

/* output - space for results of calculations, placed in the 'container': */
	const output = document.createElement("input");
	output.setAttribute("type", "text");
	output.classList.add("output");
	output.style.width = "98%";
	output.style.lineHeight = "50px";
	output.style.fontSize = "3em";
	output.style.textAlign = "right";
	output.style.margin = "3px";
	output.style.border = "1px solig grey";
	container.appendChild(output);

/* calculator's body element: */
	const main = document.createElement("div");
	main.classList.add("main");
	main.style.width = "100%";
	container.appendChild(main);

/* keys for calculator: */
	opts.forEach(function(val) {
		// console.log(val);
		btnMaker(val, addOutput);
	});


	btnMaker("=", evaluateOutput); // evaluates output
	btnMaker("C", clearOutput); // clears the output

	function evaluateOutput() {
		output.style.border = "1px solid black";
		// console.log("=");
		if (output.value === "") {
			output.style.border = "2px solid red"; // warning red border
		}
		else {
			output.value = eval(output.value); // proper value of calculations
		}
	}

	function clearOutput() {
		output.style.border = "1px solid black";
		output.value = "";
	}

/* making buttons with their attributes... */
	function btnMaker(txt, myFunction) {
		let btn = document.createElement("button");
		btn.setAttribute("type", "button");
		btn.style.width = "23%";
		btn.style.lineHeight = "50px";
		btn.style.margin = "1%";
		btn.style.fontSize = "2em";
		btn.val = txt;
		btn.textContent = txt;
		/* ...their events... */
		btn.addEventListener("click", myFunction);
		/* ...and their place in the project: */
		main.appendChild(btn);
	}

	/* function for buttons: */
	function addOutput(e) {
		// console.log(decimal);

		output.style.border = "1px solid black";
		// console.log(e.target.val); 
		// the line above helps to see which key is presed (shows its value)
		let char = e.target.val;
		
		/* if there is a decimal sign, we do not need more them in the output area */
		if (char === ".") {
			if (decimal) {
				char = "";
				output.style.border = "2px solid red";
			}
			else {
				decimal = true;
			}
		}
		/* to evaluate only maths operations signs and enable add decimal sign in many numbers in the output area: */
		evaluation = specChar.includes(char);
		if (evaluation) {
			decimal = false;
		}
		output.value += char;

	}


}