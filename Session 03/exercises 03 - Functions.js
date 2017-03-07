/*
Functions JS

_Resources to check:

https://www.w3schools.com/js/js_functions.asp
http://helephant.com/2008/08/23/javascript-anonymous-functions/
https://teamtreehouse.com/community/why-call-consolelog-on-a-function-when-its-already-logged-to-the-console-seems-redundant-same-effect
http://stackoverflow.com/questions/21020608/difference-between-console-log-and-return-in-javascript
Simple JS Function for example.


var x = myFunction(4, 3);

function myFunction(a, b) {
    return a * b;
}

var y = function myFunction(a, b) {
    console.log(a * b)
}
*/


//a) First we do a function that salute us, try to pass your name as param of function and print out for console.

var salute = function myFunction(a, b) {
    var sayHello = "Hello";
	var myName = "Toni";
	console.log("Wellecome " + sayHello + " " + myName)
}
salute();

/*
console.log("hello + myName")//output: "hello myName"
*/

//b) Try to RETURN this same values instead of console.log()

var salute = function myFunction(a, b) {
    var sayHello = "Hello";
	var myName = "Toni";
	return("Wellecome " + sayHello + " " + myName)
}
salute();

/*
return "hello + myName" // output: "hello myName"
*/

//c) Now, add your age and return it with your name too.

var salute = function myFunction(a, b) {
    var sayHello = "Hello";
	var myName = "Toni";
	var age = "40"
	return("Wellecome. " + sayHello + " " + myName + " you are " + age + " years old.")
}
salute();

/*
return "myMessage" //output: "hello myName, you"re myAge years old."
*/


//d) Equal your function to one var and execute it.

var salute = function myFunction(a, b) {
    var sayHello = "Hello";
	var myName = "Toni";
	var age = "40"
	return("Wellecome. " + sayHello + " " + myName + " you are " + age + " years old.")
}
salute();

/*
var MyFunction = ... //output: "hello myName, you"re myAge years old."
*/

//e) Now, try to declare other function and assign it result to other variable called myAge, and try to print the result of both functions in one line.

var myName = function myFunction(a, b) {
    var sayHello = "Hello";
	var myName = "Toni";
	return("Wellecome " + sayHello + " " + myName)
}

var myAge = function myFunction (a,b){
	var age = " 40";
	var ageMessage = " years old."
	return age + ageMessage;
}
myName() + myAge();

/*
myName() + myAge() //output: IronMan 40
*/

//f) Now try to declare the vars and pass as a parameter.

var name = "Toni ";
var age = 40;
function myNameAge (name,age){
	return name + age;
}
myNameAge(name,age);

/*
var...
var...
myName(param1) + myAge(param2) //output: IronMan 40
*/

//g) Try to englobe in one function both vars and execute it, the output should be the same.

function myFuction (){
	var name = "Toni ";
	var age = 40;
	return name + age;
}
myFuction ();

/*
function ... (){
    var x = myName(param1)
    var y = myAge(param2)
    return x + y
} //output: IronMan 40
*/

// h) Try to generate random numbers in other function and pass as parameter to function that return the age.

function randomAge(age){

	var age = Math.floor((Math.random() * 100) + 1);
	console.log ("Iroman has " + age + ".")
}
randomAge();


/*
return x + y // output: IronMan 6457689
Resource: http://www.w3schools.com/jsref/jsref_random.asp
*/

// i) Now, limit the random from 0 to 50. Say one message if the output age is < 20 and other if > 21

function randomAge(age){

	var age = Math.floor((Math.random() * 50) + 1);
	console.log ("Iroman has " + age + ".")
	if (age < 20){
		console.log("You have lees of 20 years old. You are a baby :-).")
	}
	else {
		console.log("You have more of 20 years old.")
	}
}
randomAge();

/*
return x + y // output: IronMan 3...Sure you"re Tony Stark?
*/

//j) Now, the function that receive the name, modify it and concatenate one string to the random num and return both

function randomAge(age){

	var age = Math.floor((Math.random() * 50) + 1);
	if (age < 20){
		var message = ("You have lees of 20 years old. You are a baby :-).")
	}
	else {
		var message = ("You have more of 20 years old.")
	}
console.log ("Iroman has " + age + ". " + message)
}
randomAge();

/*
return x + y // output: Tony Stark...aka IRONMAN, 34...Sure you"re Tony Stark? 
*/

//k) Now, change the return of the father function for console.log and show both child functions returns in pretty string

var age = function randomAge() {
    age = Math.floor((Math.random() * 50) + 1);
	
	console.log("Iroman has " + age + ". ")
}

var message = function checkAge (){
	if (age < 20){
		var message = ("You have lees of 20 years old. You are a baby :-).")
	}
	else {
		var message = ("You have more of 20 years old.")
	}
	return ("Iroman has " + age + ". " + message)
}
age();
message();

/*
return x + y // output: The first function returns: "Tony Stark...aka IRONMAN", The second function returns: "34...Sure you"re Tony Stark?" 
*/

//l) Try to catch the error if the Name passed to our child function... if is not IronMan, show message.


var age = function randomAge() {
    age = Math.floor((Math.random() * 50) + 1);
	
}

var message = function checkAge (){
	if (age < 34){
		var message = (". Sure you"re Tony Stark?.")
	}
	else {
		var message = (". Tony Stark...aka IRONMAN.")
	}
	return age + message;
}
age();
message();

/*
return x + y // output: The first function returns: "Tony Stark...aka IRONMAN", The second function returns: "34...Sure you"re Tony Stark?" 
*/

//m) Let"s make this a little bit more complicated... The random numbers should be generate in other diferent function.. return to our father function and passed as a parameter to our second function

var age = function randomAge() {
    age = Math.floor((Math.random() * 50) + 1);
	
}

var message = function checkAge (){
	if (age < 34){
		var message = (". Sure you"re Tony Stark?.")
	}
	else {
		var message = (". Tony Stark...aka IRONMAN.")
	}
	return age + message;
}
age();
message();

/*
function GenerateRandom(){
    ...
    return randomNumber.
}
function father(){
    GenerateRandom();
    return x()...
}
*/