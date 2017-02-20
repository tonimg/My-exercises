/*
1) Calculator! 15/02 -> 21/02 Make a calculator, a single function program to which you will pass two numbers, and will display by console its sum, subtraction, multiplication and division. The results should be shown only with 3 decimals at most (if exist...) and contemplate that if, the user enters anything other thing than numbers, it should show an error

As EXTRA objectives:

In addition, to be able to make square roots
Prepare the function for can accept more than 2 parameters...
Show results by storing them in an array along with the operands:
Hint_ => results = [num1 + num2 = resultSum, num1-num2 = resultRest ....]

PRO. -After do all operations, ask to user if wants make other operation with other numbers, the array should storage the results of first execution and second. Good luck!
*/
function calculadora (num1,num2){
	var sum = num1 + num2;
	var rest = num1 - num2;
	var multi = num1 * num2;
	var div = num1 / num2; 
	var square = Math.sqrt(num1);

	if  (typeof num2 == null ||' undefined' || 0 || isNaN(num2) == true){
		console.log("La raiz cuadrada de " + num1 + " es igual a " + square)
	}
	else if (isNaN(num1) == true || isNaN(num2) == true){
		console.log ("This is not a number")
	}
	
	else {
	console.log ("La suma de " + num1 + " y " + num2 + " es igual a= " + sum)
	console.log ("La resta de " + num1 + " y " + num2 + " es igual a= " + rest)
	console.log ("La multiplicación de " + num1 + " y " + num2 + " es igual a= " + multi )
	console.log ("La división de " + num1 + " y " + num2 + " es igual a= " + div.toFixed(3) )
	}
}
calculadora(9);