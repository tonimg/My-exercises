/*
1) Calculator! 15/02 -> 21/02 Make a calculator, a single function program to which you will pass two numbers, and will display by console its sum, subtraction, multiplication and division. The results should be shown only with 3 decimals at most (if exist...) and contemplate that if, the user enters anything other thing than numbers, it should show an error

As EXTRA objectives:

In addition, to be able to make square roots
Prepare the function for can accept more than 2 parameters...
Show results by storing them in an array along with the operands:
Hint_ => results = [num1 + num2 = resultSum, num1-num2 = resultsubtraction ....]

PRO. -After do all operations, ask to user if wants make other operation with other numbers, the array should storage the results of first execution and second. Good luck!
*/
function calculator (num1,num2){
	var sum = num1 + num2;
	var subtraction = num1 - num2;
	var multi = num1 * num2;
	var div = num1 / num2; 
	var square = Math.sqrt(num1);

	if  (typeof num2 == null || undefined || 0 || isNaN(num2) == true){
		console.log("The square of " + num1 + " equal to " + square.toFixed(3))
	}

	else if (isNaN(num1) == true || isNaN(num2) == true){
		console.log ("This is not a number")
	}
	
	else {
	console.log ("The sum between " + num1 + " and " + num2 + " equal to = " + sum.toFixed(3))
	console.log ("The subtraction of " + num1 + " and " + num2 + " equal to = " + subtraction.toFixed(3))
	console.log ("The multiplication of " + num1 + " and " + num2 + " equal to = " + multi.toFixed(3) )
	console.log ("The division between " + num1 + " and " + num2 + " equal to = " + div.toFixed(3) )
	showResultStore();
	}

	function showResultStore (){
	var resultStore = [sum.toFixed(3), subtraction.toFixed(3), multi.toFixed(3), div.toFixed(3), square.toFixed(3)]
	 console.log ("We show the results stored in an array: " + resultStore)
	}

	var newNumb= prompt ("Do you want introduce other number?")
	
	if (isNaN(newNumb) == false || undefined || null){
	calculator(newNumb)
	}
	else {
	alert ("The value entered is not a number. See you later, baby")
	}

}
calculator(9);