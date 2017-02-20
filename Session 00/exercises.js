var a= "variable";
function toni (a){
	console.log(typeof a)
}
// Ejercicio C2.
var name="toni";
var lastName="marchante";
function constructMail (name,lastName){
	console.log (name+lastName+"@gmail.com");
}
constructMail(name,lastName);

/*Write your name in a lower case and print it with the capital letter in a console.log. Hint: capitalize("avengers") //output: Avengers
Solución que comenta Alex: 
name.charAt(0).toUpperCase() + name.substring(1,name.length) */
var name="toni";
function capitalize (name){
	console.log (name.charAt(0).toUpperCase() + name.slice(1))
}
capitalize(name);

//e) Now, you can capitalize two strings and show for console? //output: Team Avengers, Real Power!
var name="toni";
function capitalize (name){
	console.log (name.charAt(0,1).toUpperCase() + name.substring(1,name.length))
}
capitalize(name);


