// Opdracht 1
let car = "Volvo";
let getal1 = "25";
console.log(car)
console.log("getal1:" + getal1)

// Opdracht 2
const getal2 = "getal2";
console.log(getal2)
const getal25 = 25;
console.log(getal25)
console.log("getal2 " + getal2)

// Opdracht 3 en 4
let getal3 = "5";
console.log("getal3 " + getal3)

// Opdracht 5
let datatype = false;
console.log("datatype" + typeof datatype)

// Opdracht 6
let cartype = "mercedes";
console.log(typeof cartype)

let number = 16;
console.log(typeof number)

let bigint = 908n;
console.log(typeof bigint)

let id = Symbol();
console.log(typeof id)

// Opdracht 7
let eerstenr = 6;
let tweedenr = 8;
let optel = eerstenr + tweedenr;
console.log(optel);

 eerstenr = 6;
 tweedenr = 8;
let aftrek = eerstenr - tweedenr;
console.log(aftrek);

 eerstenr = 6;
 tweedenr = 8;
let vermenigvuldig = eerstenr * tweedenr;
console.log(vermenigvuldig);

 eerstenr = 6;
 tweedenr = 8;
let delen = tweedenr / eerstenr;
console.log(delen);

// Opdracht 8
let price1 = 3;
let price2 = 5;
let price3 = 10;
let price4 = 2;
let som = price1 + price2 * price3 / price4;
console.log(som);

// Opdracht 9
number = 3;
number++; //number = number + 1;
console.log(number);

number = 3;
number--;
console.log(number)

let number1 = 3;
const sum = number1++ + 2;
// sum = 3++ +2
// sum = 3
// number1++
// sum = sum + 2 = 3 + 2
console.log('number1', number1);
console.log(sum);

let number2 = 3;
const sum2 = ++number2 + 2;
// sum = ++3 +2
// ++number2
// sum = 4
// sum = sum + 2 = 4 + 2
console.log(sum2);

// Opdracht 10
let number3 = 3;
number3 += 4; //number3 = number3 + 4; oplossing = anders gecodeerd.
console.log(number3);

// Opdracht 11
let number4 = 3;
number4 += 4;
number4 -= 2;
number4 /= 5;
number *= 4;
console.log(number4);

// Opdracht 12
let voornaam = "John";
let achternaam = "Doe";
console.log("voornaam" + voornaam + "achternaam" + achternaam);

// Opdracht 13
let string = "3";
let number5 = 3;
let combinedText = string + number5;
console.log(combinedText);

// Opdracht 14
// They are the same thing
// In JavaScript, a string is a sequence of characters enclosed in single or double quotes. The choice of quoting style is up to the programmer, and either style has no special semantics over the other. There is no type for a single character in JavaScript - everything is always a string.
let string1 = '3';
console.log(string1);

// Opdracht 15
let text = "text";
text += "another text";
// text = text + text; dit is op een andere manier gecodeerd.
console.log(text);

// Opdracht 16
// 1. charAt() 
let str = "HELLO WORLD";
let res = str.charAt(0);
console.log(res);
// 2. concat() 
let str1 = "Hello ";
let str2 = "world!";
let res2 = str1.concat(str2);
console.log(res2);
// 3. slice()
let str3 = "Hello world!";
let res1 = str3.slice(0, 5);
console.log(res1);
// 4. split() 
let str4 = "How are you doing today?";
let res3 = str4.split(" ");
console.log(res3);
// 5. substr()
let str5 = "Hello world!";
let res4 = str5.substr(1, 4);
console.log(res4);

// CONDITIONS
// Opdracht 1
function checkNumber1() {
    let value, text;
  
    value = document.getElementById("number").value;
    if(value == 3) {
        text = "Number is equal to three"
    } else {
        text = "Number is not equal to three"
    }
    document.getElementById("label").innerHTML = text;
}

// Opdracht 2
function checkNumber2() {
    let value, text;
   
    value = document.getElementById("number2").value;
    if(value >4) {
        text = "Nummer is groter dan 4"
    } else {
        text = "Nummer is kleiner dan 4"
    }
    document.getElementById("label2").innerHTML = text;
}

// Opdracht 3
function checkNumber3() {
    let value, text;
   
    value = document.getElementById("number3").value;
    if(value ==11) {
        text = "Nummer gelijk aan 11"
    } else {
        text = "Nummer is groter dan 11"
    }
    if(value <11) {
        text = "Nummer is kleiner dan 11"
    }
    document.getElementById("label3").innerHTML = text;
}

// Opdracht 4 en opdracht 7
function checkNumber4() {
    let value, text;
 
    value = document.getElementById("number4").value;
    if(value < 3) {
        text = "Nummer is kleiner dan 3";
    } else {
        text = " ";
    }
   
    document.getElementById("label4").innerHTML = text;
    }

// Opdracht 5
{/* < is less than
<= is less than or equal to */}

// Opdracht 6
function checkNumber5() {
    let value, text;
    
    value = document.getElementById("number5").value;
    if(value !=3) {
        text = "Nummer is kleiner dan 3"
    }
   
    document.getElementById("label5").innerHTML = text;
    }

// Opdracht 7 - zie opdracht 4

// Opdracht 8
// When using triple equals === in JavaScript, we are testing for strict equality. This means both the type and the value we are comparing have to be the same.
// Lets look at a couple examples of strict equality.
// In this first example we’re comparing the number 5 with the number 5. As expected, true is returned. Both are numbers, and both share the same value of 5.
// 5 === 5
// true

