'use strict'
var count = 0;
var userName = prompt("Enter Your Name")
alert("welcome " + userName + " to my website   ")
alert(" I will play a guessing game with you and ask you five questions, I hope we answer with type (yes/no  or y/n) ")

let input1 = prompt("Question one :Guessing The owner of this site is male ")
if (input1.toLocaleLowerCase() == 'yes' || input1.toLocaleLowerCase() == 'y') {
     console.log(input1 + "\n" + "rigth")
    alert("rigth answer")
    count++;
}
else {
    alert("wrong answer")
}
let input2 = prompt("Question one :Guessing The owner of this site love cooking")
if (input2.toLocaleLowerCase() == 'yes' || input2.toLocaleLowerCase() == 'y') {
    console.log(input2 + "\n" + "rigth")
    alert("rigth answer")
    count++
}
else {
    alert("wrong answer")

}

let input3 = prompt("Question one :Guessing The owner of this site is  young ")
if (input3.toLocaleLowerCase() == 'yes' || input3.toLocaleLowerCase() == 'y') {
    console.log(input3 + "\n" + "rigth")
    alert("rigth answer")
    count++;
}
else {
    alert("wrong answer")

}

var input4 = prompt("Question one : Do you expect that the owner of the page is tall?")
if (input4.toLocaleLowerCase() == 'yes' || input4.toLocaleLowerCase() == 'y') {

    alert("wrong answer")

}
else {
    console.log(input4 + "\n" + "rigth")
    alert("rigth answer")
    count++;
}

var input5 = prompt("Question one : Do you expect that the owner of the page is fat?")
if (input5.toLocaleLowerCase() == 'yes' || input5.toLocaleLowerCase() == 'y') {
    alert("wrong answer")

}
else {
    console.log(input5 + "\n" + "rigth")
    alert("rigth answer")
    count++;
}


/*new game */ 
var res=[];
const secretnumber=5;
alert(userName+"I will play a number guessing game with you .All you have to do is enter a number each time and you have four attempts ");
for(let i=0;i<=4;i++){ 
let gissNumber=parseInt( prompt("Enter attempt number   "+ i ));
if(gissNumber == secretnumber )
{
 alert( "rigth you win")
 res[i]="rigth answer" 
 count++
}
 else if (gissNumber <secretnumber ) 
{
alert("too low")
res[i]="wrong answer" 
       
}
 else if( gissNumber > secretnumber)     
{
    alert("too high")
    res[i]="wrong answer" 
    
}

}

for(var k=0;k < res.length;k++){  
alert("attempt number"+k+1+"is:"+res[k])
console.log(res[k])
}
  
var color=['red','green','blue'];
alert("You will guess in this game my 3 favert color and you have 6 attempt")
var countgiss=0;
var i=0;

while(i<6)
{
   let giss1= prompt("Enter attempt number "+i).toLocaleLowerCase();
   if(giss1== color[0] || giss1== color[1] || giss1== color[2])
   {  alert("you giss one color")
       countgiss++;
       count++
       break;  
    }
   else
   {   
       i++
       alert("try again")
       countgiss++
      continue
    }
}alert("you win from attempt number "+countgiss)
alert("the right answer red,green,blue");
alert("you Guess  " + count + " from 7 question thanks "+userName);
