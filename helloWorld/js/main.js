alert("Hello,I'm External");
console.log("Hi There!)");

let age1=prompt ("whats your age?")
console.log(age1);


let age=prompt("How Old Are You?");
alert("you are "+ age + "years old");



//<!-- summation-->

let number = parseInt( prompt("Give me a number"),10);
//parseInt(string,10)
let total = number +10;
alert(total);



//age summation 

let number = parseInt( prompt("How old are you?"),10);
//parseInt(string,10)
let total = number +1;
alert(" you will be " + total + " Next Year! ");




//<!-- writing hello +name +html part in index-->

let name = prompt ("hello, what is your name?");
document.getElementById ("demo").innerHTML ="Hello " +name ;


//alert function for clicking a button and getting a hello word +html part in index-->

function Hello(){
	alert ("Hello, World");
}


//<--!creating functions>


//Function hello user's name 
//Function Age +1
//Function raincheck


function User(){
	let name = prompt ("hello, what is your name?");
	 document.getElementById ("demo").innerHTML ="Hello " +name ;
}


function add() {
	let number = parseInt( prompt("How old are you?"),10);
	let total = number +1;
	alert(" you will be " + total + " Next Year! ");

}


function Rain(){
	let raining = prompt ("Is it Raining?1-Yes/0-NO") ;

if (raining==0){ alert ("don't take umbrella")}
else {alert ("take umbrella")}
}










