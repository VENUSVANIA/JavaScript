

//fucntion to get a prompt question with exemple name
function myFunction1(){
	   var person= prompt ('Please enter your name',"Harry Potter");
	    if (person != null) {
	    	   document.getElementById ('insert').innerHTML= "Hello" + person +"!How are you today?";

	    }
	}




//fucntion to change the name in a list by a click
	function myFunction(){
		var list = document.getElementsByTagName('ul')[0];
		list.getElementsByTagName('li')[0].innerHTML="Cake"; //go to list find the first  one which in 0 and innerhtml means insert cake instaead

	}

	function myFunction2(){
		var list = document.getElementsByTagName('ul')[0];
		list.getElementsByTagName('li')[1].innerHTML="Pizza"; //go to list find the SECOND one which in 1 cause arrays start from 0 and innerhtml means insert cake instaead

	}



	//Function3 changing color of some line in text by clicking on a button

	function changeColor(){
		var x = document.getElementById('change'); //assigning it to x to be shorter
		var y = x.getElementsByClassName('child'); // y will be everything insite x 
		var i;
		for (i=0; i< y.length; i++){
			y[i].style.backgroundColor= "lightgreen";


		}
	}
          // function to change one word in color by clicking a button
		function text(){
			alert("aaaa");
			document.getElementsByClassName('hhh')[0].style.backgroundColor= "red";
		}



//Function 4 


function insert () {
	document.writeln('<h1>Welcone to JavaScriot Programming!</h1>');
}


//fucntion 5  to change into upper case 
function toUP(){
	var x = document.getElementById("fname");
	x.value = x.value.toUpperCase(); // the value i have isnide x i want it to be upper case
}





//Function 6-------

function onChange(){

	var a = document.getElementById('mySelect').value;
	document.getElementById('changed').innerHTML ="You selected:" + a;
}








//Fucntion 7---------
function error(){
	alert('The image could not be load');
}



//Function 8------ to change color of the inout box color
function toYellow(x){
	x.style.background ="yellow";
}





//Fucntion9-------

function keyDown(){
	alert('You pressed a key inside the input field');
}




//Fucntion 10--------

function mouseDown() {
    document.getElementById("myP").style.color = "red";
}
function mouseUp() {
    document.getElementById("myP").style.color = "green";
}



//function11-----

function showCoor(event) {  
		var x = event.clientX; var y = event.clientY;
    	     	var coor = "Coordinates: (" + x + "," + y + ")";
		document.getElementById("demo").innerHTML = coor; }
function clearCoor() {
    		document.getElementById("demo1").innerHTML = "";
}









	