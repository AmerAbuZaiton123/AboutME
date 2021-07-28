'use strict'
var count = 0;
function userName(alertText0) {


    var UserName = prompt(alertText0)
    return UserName
}


function gissGender(alertText1) {
    let input1 = prompt(alertText1)
    if (input1.toLocaleLowerCase() == 'yes' || input1.toLocaleLowerCase() == 'y') {
        return input1 + "\t" + "rigth answer"
        count++
    }
    else {
        return input1 + "\t" + "wrong answer"

    }
}

function gissAge(alertText2) {
    let input2 = prompt(alertText2)
    if (input2.toLocaleLowerCase() == 'yes' || input2.toLocaleLowerCase() == 'y') {
        return input2 + "\t" + "rigth answer"
        count++
    }
    else {
        return input2 + "\t" + "wrong answer"

    }
}

function gissMarrid(alertText3) {
    let input3 = prompt(alertText3)
    if (input3.toLocaleLowerCase() == 'yes' || input3.toLocaleLowerCase() == 'y') {
        
        return input3 + "\t" + "wrong answer"

    }
    else {
        return input3 + "\t" + "rigth answer"
        count++
    }
}


function gissFavFood(alertText4) {
    let input4 = prompt(alertText4)
    if (input4.toLocaleLowerCase() == 'yes' || input4.toLocaleLowerCase() == 'y') {
        
        return input4 + "\t" + "wrong answer"

    }
    else {
        return input4 + "\t" + "rigth answer"
        count++
    }
}


function gissCountry(alertText5) {
    let input5 = prompt(alertText5)
    if (input5.toLocaleLowerCase() == 'yes' || input5.toLocaleLowerCase() == 'y') {
        
        return input5 + "\t" + "wrong answer"

    }
    else {
        return input5 + "\t" + "rigth answer"
        count++
    }
}

function SecretNumber(alertText6,userName,attempte,secretNum)
{  var res=[];
    alert(userName+alertText6)
    for(let i =1;i<attempte;i++){  
    let resualt=Number( prompt("Enter attempte number "+i))
    if(resualt == secretNum )
    {
     alert( "rigth you win")
     res[i]="rigth answer" 
     count++
     break
    }
     else if (resualt <secretNum ) 
    {
    alert("too low")
    res[i]="wrong answer" 
           
    }
     else if(resualt >secretNum)     
    {
        alert("too high")
        res[i]="wrong answer" 
        
    }
}
    
    for(var k=0;k < res.length;k++){  
        alert("attempt number"+k+1+"is:"+res[k])
        console.log(res[k])
    }
   return res[k]+"you win"
}

function favcolor(alertText7,UserName1)
{
    let color=['red','green','blue ','yallow','black','white']

    let gisscolor= prompt(UserName1+alertText7)
for(var i=0;i<6;i++){
        for(var k=0;k<=color.length;k++)
        {
            if(gisscolor === color[k])
            {
                alert('oh you giss my fav color ');
               count++
               return'oh you giss my fav color '
               breck ;
             
            }
        }  
     gisscolor=prompt(UserName1+ alertText7)
     if(i===5){
     alert("you diint giss correct answer")
      return "you diint giss correct answer"
    }
 }
return gisscolor;

}
let attempte=4
let secretNum=8;
let UserName1 = userName("Enter You Name");
alert(" I will play a guessing game with you and ask you 7 questions, I hope we answer with type (yes/no  or y/n) ")
let input1 = gissGender("Question one :do you thing the owner of this site is male (yes/y  OR no/n) ")
console.log(input1)
alert(input1);
let input2 = gissAge("Question Two :Do you thing my age less then 26 (yes/y  OR no/n)")
console.log(input2)
alert(input2)
let input3 = gissMarrid("Question Three :Do you thing i am married  (yes/y  OR no/n)")
console.log(input3)
alert(input3)
let input4 = gissFavFood("Question Three :Do you thing Mansaf is my fevorite Food (yes/y  OR no/n)")
console.log(input4)
alert(input4)
let input5 = gissCountry("Question Three :Do you thing iam from Jorden (yes/y  OR no/n)")
console.log(input5)
alert(input5)

let input6=SecretNumber(UserName1,"I will play a number guessing game with you .All you have to do is enter a number each time and you have four attempts ",attempte,secretNum );
console.log(input6)
alert(input6) 
alert("Correct answer is number 8");

let input7=favcolor("I will play a color guessing game with you .All you have to do is enter a color each time and you have six attempts ",UserName1);
console.log(input7)
alert(input7) 
alert("Correct answer is number red or white or black or blue or green or yallow ");
