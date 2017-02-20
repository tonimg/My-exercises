//······Strings······//

//a) Hello again! I don't remember you'r name, you can tell me again please? Write your name and count how much letters have
var name="Toni"
function myName(name){
	console.log("Mi nombre es " + name + " y tiene " + name.length + " letras.")
}
myName(name);

//b) In what position is you'r first lastname??
var name="Toni";
var lastName="Marchante";
var nombreCompleto= name+lastName;
function positionLastName (name,lastName){
	console.log("Mi nombre es "+ name +" "+ lastName + "\nMi apellido esta situado en la posicion número " + nombreCompleto.indexOf("M") )
}
positionLastName(name,lastName);

//c) Now, show for console ONLY your nane
var name="Toni Marchante"
function myName(name){
	console.log("Mi nombre es " + name.substring(0,4) + ".")
}
myName(name);

//d) Now, your second lastname
var name="Toni Marchante García"
function showSecondLastName(name){
	console.log("Mi segundo apellido es " + name.substring(15) + ".")
}
showSecondLastName(name);

//e) Now, replace your name for "Mr/Ms" and show the lastname as same
var name="Toni Marchante";
function replace(name){
	console.log("Vamos a reemplazar mi nombre " + name + " por Mr y dejar solo mi apellido tal cual esta.\n" )
 console.log("Ahora es " + name.replace("Toni", "Mr")) 
}
replace(name);

//f) Now, select your first lastname and converts to Upper Case
var name= "Toni";
var lastName="Marchante";
function UpperCaseLastName(lastName){
	console.log("Mi apellido completamente en mayúsculas es " + name + " " + lastName.toUpperCase() + ".")
}
UpperCaseLastName(lastName);

//g) Now, add one message in other string var and join to other name string, show it for console
var primerMensaje= "Hola";
var segundoMensaje= " soy Toni";
var unirVariables= primerMensaje.concat(segundoMensaje);
function unirMensajes (primerMensaje, segundoMensaje){
	console.log("En esta función vamos a unir 2 variables: \n" + unirVariables)
}
unirMensajes(primerMensaje, segundoMensaje);

//h) Now, you can select the first letters of your lastnames and show they?
// Este ejercicio mensaje.charAt(0)
var completName= "Toni Marchante García";
function mostrarInicialApellido (completName){
	console.log("Seleccionamos las dos primeras iniciales de mis apellidos para mostrarlas: \n" + completName.charAt(5), completName.charAt(15))
}
mostrarInicialApellido(completName);

//i) Convert your name to array, saparated elements by "/"
/*var str = "How are you doing today?";*/
/*var res = str.split("o");*/
var name="Toni";
function showLetters(name){
	var letters = name.split("");
	var reformedString = letters.join("/")
	console.log("My letters are: " + reformedString)
}
showLetters(name)

//j) Catch your lastname and show every letter separated by "|"
var name="Toni";
var lastName="Marchante";
function showLetters(name,lastName){
	var letters= lastName.split("");
	var reformedString = letters.join("|")
	console.log("Mi apellido separado por | es: \n" + name + " " + reformedString + ".")
}
showLetters(name,lastName);


//······Numbers······//

//a) What time is it? Converts it to string and show it for console
function mostrarHora() {
    var hora = new Date();
    var valorHora = hora.getHours();
	var minutos = new Date();
	var valorMinuto = minutos.getMinutes();
console.log("Ahora son las " + valorHora + " horas y " + valorMinuto + " minutos.")
}
mostrarHora();

//b) What time is it exactly? Show it without the minutes.
function mostrarHora() {
    var hora = new Date();
    var valorHora = hora.getHours();
console.log("Ahora son las " + valorHora + " horas.")
}
mostrarHora();

//c) Now, try to convert your hour var with minutes to entire number without minutes and show it
function mostrarHora() {
    var hora = new Date();
    var valorHora = hora.getHours();
console.log("Ahora son las " + parse.(valorHora) + " horas.")
}
mostrarHora();
console.log(parse...(10.34)) // 10!

//d) We can do a calculator, so let's do it! first, do a sum with two numbers
var num1 = 2;
var num2 = 5;
function sumar(num1,num2){
	var sumar= num1+num2;
	console.log("La suma de 2 + 5 es: " + sumar)
}
sumar(num1,num2);

//d1) Add the rest...
var num1 = 2;
var num2 = 5;
function sumarRestar(num1,num2){
	var sumar = num1+num2;
	var resultadoSuma = sumar;
	var restar = resultadoSuma - num1;
	console.log("La suma de 2 + 5 es: " + sumar + " y la resta de 2 es igual a:" + restar + ".")
}
sumarRestar(num1,num2)

//d2) And the multicity
var num1 = 2;
var num2 = 5;
function sumarRestarMultiplicar(num1,num2){
	var sumar = num1+num2;
	var resultadoSuma = sumar;
	var restar = resultadoSuma - num1;
	var resultadoResta = restar;
	var multiplicar = resultadoResta * num2;
	console.log("La suma de 2 + 5 es: " + sumar + " y la resta de " + num1 + " es igual a: " + restar + " y si esto lo multiplicamos por " + num2 + " es igual a: " + multiplicar + "." )
}
sumarRestarMultiplicar(num1,num2)

//d3) Finally, the division
var num1 = 2;
var num2 = 5;
function sumaRestMultiDiv(num1,num2){
	var sumar = num1+num2;
	var resultadoSuma = sumar;
	var restar = resultadoSuma - num1;
	var resultadoResta = restar;
	var multiplicar = resultadoResta * num2;
	var resultMulti = multiplicar;
	var div = resultMulti / num2;
	console.log("La suma de 2 + 5 es: " + sumar + ".\nAl resultado anterior " + resultadoSuma + " restamos " + num1 + " y nos da " + restar + ".\nAhora si a " + resultadoResta + " lo multiplicamos por " + num2 + " es igual a " + multiplicar + "\nAhora " + resultMulti + " lo dividimos entre " + num2 + " y nos da un total de " + div + ".")
}
sumaRestMultiDiv(num1,num2)

//d) Now, try to execute a multiplicity like 10 * "hour", what value is returned?
function multiHora() {
    var hora = new Date();
    var valorHora = hora.getHours();
	var num1 = 10;
	var multi = valorHora*num1;
	console.log("Ahora son las " + valorHora + " horas.\nSi lo multiplicamos por " + num1 + " nos da un total de " + multi)
}
multiHora();
//e) Don't worry, we can catch this error, you can controle it with if conditional?

console.log(10*"hour") // You can't do this operation!
//f) With other conditional, returns other operation



//······Dates······//

//a) Hey! You can tell me what year we are?! Declare a object Date using var d = new Date(); This objects contains all information about date, and of course, the methods that we can use for this exercises.
function año (){
	var date = new Date();
	console.log("Estamos en el año " + date.getFullYear())
}
año();

//b) Sorry... I lost the memory... In what day of weekend?
function diaSemana (){
	var date = new Date();
	var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
	console.log("Hoy es " + dias[date.getDay()])
}
diaSemana();

//c) You can tell me the number of seconds between your birthday to now?
function timeBirthday(){
	var myBirthday = Date.parse("April 4, 1976");
	console.log("The number of seconds between my birthday (April 4, 1976) and now is: " + myBirthday + ".")
}
timeBirthday();

//d) And days?
function daysToMyBirthday(){
	var today = new Date();
	var myBirthday = new Date (2017, 04, 04);
	myBirthday.setFullYear(today.getFullYear());
	var millisecondsPerDay = 24 * 60 * 60 * 1000; // total milisegundos por dia.
	var daysLeft = (myBirthday.getTime() - today.getTime()) / millisecondsPerDay; // como muestra en milisegundos, lo dividimos por el total de milisegundos dia y obtenemos el total de los días.
	var fullDaysLeft =Math.round(daysLeft); // redondeamos el día para evitar decimales.
	console.log ("Days to left for my birthday " + fullDaysLeft)
}
daysToMyBirthday();

//e) You can do a comparator between one date and now? Show a message if one date is before or after 10 June, 1986
function comparatorDates(){
	var nowDate = new Date();
	var someDay = new Date("1986, 6, 10");
	if (nowDate > someDay){
		console.log ("The actual date is after that " + someDay + ".")
	}
	else{
		console.log ("The actual date is before that " + someDay + ".")
	}
}
comparatorDates();

//f) You can do other comparator... only with years? Do multiple comparators and sshow the messages
function comparatorDates(){
	var nowDate = new Date();
	var someDay = new Date();
	someDay.setFullYear(2015);// Variable que vamos cambiando el año
	if (nowDate > someDay){
		console.log ("The actual date is after that " + someDay + ".")
	}
	else if (nowDate = someDay){
		console.log ("The date is the same that now " + nowDate + ".")
	}
	else if (nowDate<someDay){
		console.log("Today " + nowDate + " is minor that" + someDay + ".")
	}
	else {
		console.log ("This is not a year.")
	}
}
comparatorDates();

console.log(...)
// 1987 is before now
// 2980 is after now
// 2016 is now!
// 1098 is before now
// This is not a year...




