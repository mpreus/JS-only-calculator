window.addEventListener("DOMContentLoaded", init);

/* all keys needed in the project: */
const opts = ["*", "/", "+", "-", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "."];
/* special operations key only: */
const specChar = ["*", "/", "+", "-",];

function init() {
	document.title = "JavaScript Calculator";
/* background */
	const body = document.getElementsByTagName("body");
	body[0].style.backgroundColor = "#e1e6cf";
	
	const calcFrame = document.getElementById("calc");
	console.log(calcFrame);

/* variables for evoiding many decimal dots in one number: */
	let decimal = false;
	let evaluation = false;

/* VISUAL PART OF CALCULATOR */
/* container for calculator */
	const container = document.createElement("div");
	container.classList.add("container");
	container.style.maxWidth = "600px";
	container.style.margin = "auto";
	container.style.border = "1px solid grey";
	container.style.borderRadius = "5px";
	container.style.backgroundColor = "#02075d"
	calcFrame.appendChild(container);

/* output - space for results of calculations, placed in the 'container': */
	const output = document.createElement("input");
	output.setAttribute("type", "text");
	output.classList.add("output");
	output.style.width = "98%";
	output.style.lineHeight = "50px";
	output.style.fontSize = "3em";
	output.style.textAlign = "right";
	output.style.margin = "4px";
	output.style.border = "1px solid grey";
	output.style.borderRadius = "4px";
	container.appendChild(output);

/* calculator's body element: */
	const main = document.createElement("div");
	main.classList.add("main");
	main.style.width = "100%";
	container.appendChild(main);

	const foot = document.createElement("footer");
	foot.style.cursor = "pointer";
	foot.style.marginTop = "30px";
	foot.style.textAlign = "center";
	document.body.appendChild(foot);
	
	const mailToAuthor = document.createElement("a");
	mailToAuthor.textContent = "2020@Maciej Preus";
	mailToAuthor.style.textDecoration = "none";
	mailToAuthor.setAttribute("href", "mailto:mpreus@onet.eu");
	foot.appendChild(mailToAuthor);

/* keys (buttons) for calculator looping through 'opts' array and using a function: */
	opts.forEach(function(val) {
		// console.log(val);
		btnMaker(val, addOutput);
	});

/* MATHS OPERATIONS ENABLED */
	btnMaker("=", evaluateOutput); // evaluates output
	btnMaker("C", clearOutput); // clears the output

/* for handling errors - demonstrating visualy */
	function colorOutput(colorValue) {
		output.style.border = colorValue + "1px solid";
		output.style.color = colorValue;
	}

	function evaluateOutput() {
		colorOutput("black");
		// console.log("=");
		if (output.value === "") {
			colorOutput("red");
		} 
		else if (evaluation) {
			colorOutput("red");
		}
		else {
			output.value = eval(output.value); // proper value of calculations
		}
		decimal = output.value.includes(".");
	}
/* clearing the output: */
	function clearOutput() {
		colorOutput("black");
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
		btn.style.borderRadius = "4px";
		btn.style.backgroundColor = "#dcdcdc";
		btn.val = txt;
		btn.textContent = txt;
		if ( btn.textContent.includes("*") || btn.textContent.includes("/") || btn.textContent.includes("-") || btn.textContent.includes("+") ) {
			btn.style.backgroundColor = "#808080";
			btn.style.color = "#fff";
		}
		/* ...their events... */
		btn.addEventListener("click", myFunction);
		/* ...and their place in the project: */
		main.appendChild(btn);
	}

	/* function for buttons: */
	function addOutput(e) {
		// console.log(decimal);
		colorOutput("black");
		// console.log(e.target.val); 
		// the line above helps to see which key is presed (shows its value)
		let char = e.target.val;
		/* if there is a decimal sign, we do not need more them in the output area */
		if (char === ".") {
			if (decimal) {
				char = "";
				colorOutput("red");
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