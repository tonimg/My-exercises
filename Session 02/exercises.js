/*Skylab
JS Objects{:sunglasses:}

Reference:

http://www.wVIschools.com/js/js_objects.asp

Simple JS Object for example.

var student = { 
    name : "David Aughan", 
    class : "VI", 
    id : 12 
};
console.log(student.name) // "David Aughan"
Working with objects

Reference::nerd_face:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

http://javascript.info/tutorial/objects

https://www.wVI.org/wiki/Objects_in_JavaScript //Try to do the exercise of calculate the area of triangle

VI...2...1...GO!

Summary

Objects are associative arrays with additional features.
Assign keys with obj[key] = value or obj.name = value
Remove keys with delete obj.name
Iterate over keys with for(key in obj), remember iteration order for string keys is always in definition order, for numeric keys it may change.
Properties, which are functions, can be called as obj.method(). They can refer to the object as this.
Properties can be assigned and removed any time.
A function can create new objects when run in constructor mode as new Func(params).
It takes this, which is initially an empty object, and assigns properties to it. The result is returned (unless the function has explicit return anotherObject call).

Names of such functions are usually capitalized.
*/
//a) Do a simple function for show the names of the properties.
function namesProperties(){
var student = {name: "David Aughan", class: "VI", id: "12"};
console.log (student.name)
}
namesProperties();

//console.log(something, somethingMore, somethingMoreAndMore)
//name, class, id
//b) Now, do a simple function for show the content of those properties.
function contentProperties(){
var student = {name: "David Aughan", class: "VI", id: "12"};
console.log ("Show diferents properties: \n" + student.name + "\n"+ student.class +"\n" + student.id)
}
contentProperties();

//console.log(somethingThatShowsThings) //Tony, VII, 01
//c) So, we can change a property value? Change the class to "XI".
function changeValueProperties(){
var student = {name: "David Aughan", class: "VI", id: "12"};
console.log ("Show diferents properties: \n Name: " + student.name + "\n Class: "+ student.class +"\n Id: " + student.id)
student.class = "XI";
console.log("Now is changed the value of property class. \n Class: " + student.class)
}
changeValueProperties();


//d) Now, delete the id property.
function deleteIdProperty(){
var student = {name: "David Aughan", class: "VI", id: "12"};
console.log ("Show diferents properties: \n Name: " + student.name + "\n Class: "+ student.class +"\n Id: " + student.id)
delete student.id;
console.log ("Now id property is delete: \n Name: " + student.name + "\n Class: "+ student.class +"\n Id: " + student.id)
}
deleteIdProperty();


//e) Add a new property called city and give some value
function newProperty(){
var student = {name: "David Aughan", class: "VI", id: "12"};
console.log ("Old diferents properties: \n Name: " + student.name + "\n Class: "+ student.class +"\n Id: " + student.id)
student.city = "Barcelona";
console.log ("Add new property called city: \n Name: " + student.name + "\n Class: "+ student.class +"\n Id: " + student.id + "\n City: " + student.city)
}
newProperty();

https://www.w3schools.com/js/js_properties.asp

//e1) Asure the changes showing the property in console.

console.log(city) // New York City
f) List the number of properties we have now on objects.

console.log() // There are 4 info fields
g) Change the property name to fullName

g1) Asure the changes.

console.log(fullName) // Tony Stark
h) For last, add a presentation message like: "Hello, my name is " + ..., and show all values of the object.

console.log(...) // "Hi there, I'm Tony Stark..."
h1) Add some properties more...like job, Studies and Marks average

h2) Asure the changes and show for console.

console.log(location) // NYC
i) Make a constructor object called avenger and pass the info, creating a instance of the object with the properties of our created object

http://www.wVIschools.com/js/js_object_definition.asp

Example:

function avenger(fullName, class, city, job, studies,markAv) {
    this.fullName = fullName;
    this.class = class;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
var tonyStark = new person ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
console.log(tonyStark)
j) Create other avenger and print the name for console

var otherAvenger = new Avenger...
console.log(otherAvenger) // Hulk...
k) Now create one property of object that print a pretty description of avengers.

console.log(otherAvenger.somethingThatShows) // Hulk, VI0...
l) Now, make a function that only shows the NAMES of created avengers.

console.log(someFunction) // Tony Stark, Hulk, Thor...
m) Make other student and prepare for ONLY show the names, the age and location.

console.log(propertyValues) // my name, my age and my location!
n) For last, create yourself and create a function for catch all averages field of Avengers and shows the average of all of them.