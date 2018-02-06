let buttons = document.querySelectorAll(".button");
let pText = document.querySelector("p");

const add = (a,b) => parseInt(a)+parseInt(b);
const subtract = (a,b) => parseInt(a)-parseInt(b);
const multiply = (a,b) => parseInt(a)*parseInt(b);
const divide = (a,b) => parseInt(a)/parseInt(b);

let operator = (e) => (e === '+' || e === '-' || e === '*' || e === '/') ? true : false;
let op = false; //whether operator can be used or not

let addButtonEvent = function (event) { // function that adds appropriate events
	if (event.target.id === "=" && op)
		{
		//calculate
		console.log("Calculation called");
		pText.textContent = calculate(pText.textContent);
		}
	else if (event.target.id === "reset")
		{
		pText.textContent = '';
		op = false;
		}
	else if (operator(event.target.id) && op)
		{
		pText.textContent += event.target.id;
		op = false;
		}
	else if (!operator(event.target.id) && event.target.id !== '=')
		{
		pText.textContent += event.target.id;
		op = true;
		}
};

let calculate = function (string) {
	let numberArray = string.replace(/\W/g, " ")
							.split(" ");
	let operatorArray = string.replace(/\w/g, " ")
							  .trim()
							  .split(" ");
	let counterOp = operatorArray.length;
	let counterNum = numberArray.length;

	for (let i = 0; i < counterOp; i++)
	{
		if (operatorArray.includes("*") || operatorArray.includes("/")) // multiply operator exists or divide operator exists
		{
			if (operatorArray.includes("*") && operatorArray.includes("/"))
			{
				if (operatorArray.indexOf("*") < operatorArray.indexOf("/"))
				{
					let n = operatorArray.indexOf("*");
					let result = multiply(numberArray[n],numberArray[n+1]);
					numberArray.splice(n, 2);
					numberArray.splice(n, 0, result);
					operatorArray.splice(n, 1);
				}
				else
				{
					let n = operatorArray.indexOf("/");
					let result = divide(numberArray[n], numberArray[n+1]);
					numberArray.splice(n, 2);
					numberArray.splice(n, 0, result);
					operatorArray.splice(n, 1);
				}
			}
			else if (operatorArray.includes("*"))
			{
				let n = operatorArray.indexOf("*");
				let result = multiply(numberArray[n], numberArray[n+1]);
				numberArray.splice(n, 2);
				numberArray.splice(n, 0, result);
				operatorArray.splice(n, 1);
			}
			else
			{
				let n = operatorArray.indexOf("/");
				let result = divide(numberArray[n], numberArray[n+1]);
				numberArray.splice(n, 2);
				numberArray.splice(n, 0, result);
				operatorArray.splice(n, 1);
			}
		}
		else
		{
			if (operatorArray[0] === '+')
			{
				let result = add(numberArray[0], numberArray[1]);
				numberArray.splice(0, 2);
				numberArray.splice(0, 0, result);
			}
			else
			{
				let result = subtract(numberArray[0], numberArray[1]);
				numberArray.splice(0, 2);
				numberArray.splice(0, 0, result);
				operatorArray.splice(0, 1);
			}
		}
	}
	return numberArray.join('');
};

buttons.forEach( (button) => {
	button.addEventListener('click', (e) => {
		addButtonEvent(e);
	});
});
