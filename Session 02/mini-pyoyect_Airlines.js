
https://www.w3schools.com/js/js_object_definition.asp
// This is a example of array of objects... each position of array contains one object...

https://github.com/agandia9/studySessions/blob/master/studySession_6.md

var flights = [
	{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
	{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
	{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
	{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
	{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
	{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
	{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
	{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
	{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
	{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
]

//A message will be displayed welcoming the user,

var name = prompt ("Wellcome, What is your name? please.") 
var messageWellcome = "Wellcome " + name + " , this is the new Airlines company Skylab.";
console.log(messageWellcome);

//The user can see a list of flights in a simple but comfortable message,

function showListFlights(){
		console.log(" \nList of the available flights: \n");
	for (var i = 0; i < flights.length; i++){
		console.log(flights[i].to + ".")
	}
}
showListFlights();

//The user can know which is the most expensive flight and which is the cheapest,

var costFlights = [];

//empty arry, that after I can fill with the costs values.

console.log("\n To continue we show the most expensive flights: \n")	
for (var i = 0; i < flights.length; i++){
	costFlights.push(flights[i].cost)
};

//order the new array

var orderedCost = costFlights.sort(function (a,b){
	return (b-a)
});

// assign to new vars the first and last value (the cheaper and expansive costs)

var maxCost = orderedCost[0] 
var minCost = orderedCost[orderedCost.length-1]

// show to our user

console.log("The cheaper cost for today is => " + minCost + "\n" + "The most expansive flight today is =>" + maxCost)

//What is the average price of flights for today,
// Case simple for (like always)

var average = 0;
for (var i = 0; i < costFlights.length; i++) {
	average += costFlights[i]/2;
};
console.log("The average price of our flights for today is => " + average)

//How many flights have stopovers,

function stopovers (){
	for (var i = 0; i < flights.length; i++){
			var scale = flights[i].scale;
			if (scale == true){
			console.log (" flights with scale on our airport");
			}
	}
}	
stopovers();

//And knowing that the last 5 IDs are the last flights of the day, shows the user the last destinations (only the name)

var lastFlights = [];
	for  (var i = 0; i < flights.length; i++){
		lastFlights.push(flights[i].to)
	};
console.log("The last 5 flights of the day: \n" + lastFlights. slice(-5));


/*
PRO!:

You must indicate to the function if you are admin or user.

If you are admin the function, through the user prompt, you should:

To be able to create more flights, up to 15, when the number of flights reaches 15, must show the error that the airport have collapsed.
Delete flights by ID
If you are a user:

You can search for price, higher, less or equal, a question will be displayed indicating which flight you want, indicating the ID, will show the selected flight information and a message: Thank you for your purchase, good day!
Ask to user if you want make other purchase, directly, asking by the ID of the new flight
_Resources: http://stackoverflow.com/questions/1290131/javascript-how-to-create-an-array-of-object-literals-in-a-loop

http://stackoverflow.com/questions/15742442/declaring-array-of-objects
*/
