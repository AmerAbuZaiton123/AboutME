'use strict'
var count = 0;
var name = prompt("Enter Your Name")
alert("welcome " + name + " to my website   ")
alert(" I will play a guessing game with you and ask you five questions, I hope we answer with type (yes/no  or y/n) ")

let input1 = prompt("Question one :Guessing The owner of this site is male ")
if (input1.toLocaleLowerCase() == 'yes' || input1.toLocaleLowerCase() == 'y') {
    /* console.log(input1 + "\n" + "rigth")*/
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


alert("you Guess  " + count + " from 5 question thanks "+name);