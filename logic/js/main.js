//Raincheck if statment+html part in index

function ifRain(){
	let inputRain = prompt('Is it Raining? 1-Yes /2-No');
	if (inputRain==1) {
		alert('take umbrella');
	}else {alert('do not take umbrella');
	}
}


//raincheck if raining or living in vancouver+html part in index

function Rain(){
	let weather = prompt('Raining?  1 -Yes/ 2- No /do you live in vancity? 3' );
	if (weather==1 || weather==3){ // we added || or condition
		alert('take umbrella');
	}else { alert ('do not take umbrella');
    }
}



//function switch:{  add parseInt(convert string to a number) before the promptand then swith+case;break;}+html part in index
function Raincheck(){
	let rain=parseInt(prompt('Is it raining?1-yes / 2-No /3- I live in Vancouver'),10);
	switch (rain) 
	{case 1: alert ('Take umbrella');
	break;
	case 2: alert('Do not take umbrella');
	break;
	case 3: alert('Always take umbrealla');
	break;
	default:Raincheck();
	
	
}	

}


//function for guess game +html in index
 function fruit() {
let fruit ='apple';
let userInput = prompt('What is your favorite fruit');
 if ( userInput.toLowerCase() === fruit){
 	console.log('you win the apple prize');
 } else{
 	console.log('youlost');
 }
}




//for loop fucntion count form 1 to 10+html button on index
function count(){
let i=0;
for (i=0;i<11;i++){
console.log(i);
}
}






//while loop

let i=0 
do{
	console.log(i)
	i+=2
}while (i<10)









let i;
for (i=0;i<10)


























