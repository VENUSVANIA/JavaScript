

//in the concole array exemple:

let studentArray=['leonardo', 'Raphael','Donatello','Michalangelo'];
console.log('the first student name is:' + studentArray [0]);


//example creating array with id linked to html

var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars[1];



//loop array:


var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;


//JAVA sum and average function:

function check(){
	let num1 = parseInt (document.getElementById('number1').value);
	let num2 = parseInt (document.getElementById('number2').value);
	let num3 = parseInt (document.getElementById('number3').value);

	let sumNum = parseInt (num1 + num2 + num3);
	let averageNum= parseInt((num1 + num2+ num3)/3);

	if (document.getElementById('sum').checked){
		document.getElementById('result').innerHTML=sumNum;
	} else if (document.getElementById('averageNum').checked){
		document.getElementById ('result').innerHTML=averageNum;
	}else {document.getElementById('result').innerHTML="select something"}
}








//Average with array:
alert('test');


let numberArray =[10,10,10]
      let average;
      let sum=0;
      let i;

//calculate of the items,assign it to sum
//sum=numberArray[0]+numberArray[1]+numberArray[2]+numberArray[3]

      for (i=0; i< numberArray.length;i += 1){
      	sum+=numberArray[i];
      }
//calculate the average
      average =sum /numberArray.length;

//print on html
      function showArray() {
      	document.getElementById('show').innerHTML =numberArray;
      }
      function Average(){
      document.getElementById('here').innerHTML = average;
        }






//JAVA convert cm to inch :


function toInch() { let cm = parseInt (document.getElementById('cm').value);

	let inch= (cm*0.39);
	document.getElementById("result").innerHTML = inch;

  
}











