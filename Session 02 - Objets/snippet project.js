/*
Alejandro Delgado Today at 12:31 PM  
Chicos! Por aquí os dejo algo interesante, tres formas diferentes de recorrer un objeto, con FOR clásico, FOR IN y FOR EACH, echadle un ojo, cada versión es un pelín más "pro". Cualquier duda no dudéis en preguntar!
*/

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

//SIMPLE FOR ------------------------------------------------------
var costFlights = []

console.log("\n To continue we show the most expensive flight: \n")	
// fill this empty array with the cost values... u can do it also with ForEach or for In
	for (var i = 0; i < flights.length; i++) {
		costFlights.push(flights[i].cost)
	};
	

console.log("Array filled with CLASSIC FOR => " + costFlights)

//FOR IN ---------------------------------------------------------
//declare a new array for save all costs...
var costFlights2 = []

console.log("\n To continue we show the most expensive flight: \n")	
// fill this empty array with the cost values... u can do it also with ForEach or for In
for (num in flights){
	costFlights2.push(flights[num].cost)
	
}
console.log("Array filled with FOR IN => " + costFlights2)

//FOR EACH --------------------------------------------------------------
//declare a new array for save all costs...
var costFlights3 = []

console.log("\n To continue we show the most expensive flight: \n")	
// fill this empty array with the cost values... u can do it also with ForEach or for In
flights.forEach(function(entry){
	costFlights3.push(entry.cost)
})
console.log("Array filled with FOR EACH => " + costFlights3)



/*

Otra solucion menos vistosa.
// HERE THE ARRAY OF FLIGHTS....
//declare a new array for save all costs...
*/
var costFlights = []

console.log("\n To continue we show the most expensive flight: \n")	
// fill this empty array with the cost values... u can do it also with ForEach or for In
for (var i = 0; i < flights.length; i++) {
	costFlights.push(flights[i].cost)
};
//order the new array
var orderedCost = costFlights.sort(function(a, b){return a-b});
// assign to new vars the first and last value (the cheaper and expansive costs)
var maxCost = orderedCost[orderedCost.length-1]
var minCost = orderedCost[0]
// show to our user
console.log("The cheaper cost for today is => " + minCost + "\n" + "The most expansive flight today is =>" +maxCost)


// Other example:

// Case simple for (like always)
var array = [0,1,2,3,4,5]
var sum = 0 
for (var i = 0; i < array.length; i++) {
	sum += array[i]
};
console.log(sum)
// ----------------------------------------------------------------------
// Case for-in is good => Simple object and show all propierties
var obj = {
id: "01",
name: "Alex"
}

for (key in obj){
	console.log(key + " => " +obj[key])
}
// Output:
// id => 01
// name => Alex

// ----------------------------------------------------------------------
// Case for-each is good => array of objects or simple array
// First Case (Array of objects)
var objs = [
{id: "01", name: "Barcelona", country: "Spain"},
{id: "02", name: "Paris", country: "France"},
{id: "03", name: "Tokyo", country: "Japan"},
{id: "04", name: "New York", country: "EEUU"},
{id: "05", name: "Berlin", country: "Germany"}
]
objs.forEach(function(key){
	console.log(key.name);
})
// Second Case (Simple array)
var nums = [0,1,2,3,4,5]
var acum = 0;
nums.forEach(function(i){
	console.log( acum += nums[i])
})
console.log("Acum => " + acum)