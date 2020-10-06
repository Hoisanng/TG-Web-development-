// CONDITIONS
// Opdracht 1
function checkNumber1() {
    let value, text;

    value = document.getElementById("number").value;
    if (value == 3) {
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
    if (value > 4) {
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
    if (value == 11) {
        text = "Nummer gelijk aan 11"
    } else {
        text = "Nummer is groter dan 11"
    }
    if (value < 11) {
        text = "Nummer is kleiner dan 11"
    }
    document.getElementById("label3").innerHTML = text;
}

// Opdracht 4 en opdracht 7
function checkNumber4() {
    let value, text;

    value = document.getElementById("number4").value;
    if (value <= 3) {
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
    if (value != 3) {
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

// Opdracht 9
function checkNumber6() {
    let value, text;

    value = document.getElementById("number6").value;
    if (value > 5 && value < 11) {
        text = "het ingevoerde getal is tussen 5 en 10";
    } else {
        text = " ";
    }

    document.getElementById("label6").innerHTML = text;
}

// Opdracht 10
function checkNumber7() {
    let value, text;

    value = document.getElementById("number7").value;
    if (value >= 13 && value <= 20) {
        text = "Het ingevoerde getal is gelijk aan 13 of groter dan 13 en is gelijk aan 20 of kleiner dan 20";
    }
    else {
        text = " ";
    }

    document.getElementById("label7").innerHTML = text;
}

// Opdracht 11
function checkNumber8() {
    let value, text;

    value = document.getElementById("number8").value;
    console.log(value)
    if (value == 21 || value == 23) {
        text = "Het ingevoerde getal is gelijk aan 21 of is gelijk aan 23";
    }
    else {
        text = " ";
    }
    document.getElementById("label8").innerHTML = text;
}

// Opdracht 12
function checkNumber9() {
    let value, text;

    value = document.getElementById("number9").value;
    console.log(value)
    if (value > 30 && value < 35) {
        text = "Het getal is tussen 30 en 35";
    }
    if (value > 40 && value < 45) {
        text = "Het getal is tussen 40 en 45";
    }
    else {
        text = " ";
    }
    document.getElementById("label9").innerHTML = text;
}

// Opdracht 13
function translateMonth() {
    let value, text;

    value = document.getElementById("number10").value;
    if (value == 1) {
        text = "January";
    }
    if (value == 2) {
        text = "February";
    }
    if (value == 3) {
        text = "March";
    }
    if (value == 4) {
        text = "April";
    }
    if (value == 5) {
        text = "May";
    }
    if (value == 6) {
        text = "June";
    }
    if (value == 7) {
        text = "July";
    }
    if (value == 8) {
        text = "August";
    }
    if (value == 9) {
        text = "September";
    }
    if (value == 10) {
        text = "October";
    }
    if (value == 11) {
        text = "November";
    }
    if (value == 12) {
        text = "December";
    }

    document.getElementById("translatedMonth").innerHTML = text;
}

// Opdracht 14
function translateMonth11() {
    let value = document.getElementById("number11").value;
    let day = document.getElementById("translatedMonth11");
    switch (value) {
        case "1":
            day.innerHTML = "January";
            break;
        case "2":
            day.innerHTML = "February";
            break;
        case "3":
            day.innerHTML = "March";
            break;
        case "4":
            day.innerHTML = "April";
            break;
        case "5":
            day.innerHTML = "May";
            break;
        case "6":
            day.innerHTML = "June";
            break;
        case "7":
            day.innerHTML = "July";
        case "8":
            day.innerHTML = "August";
            break;
        case "9":
            day.innerHTML = "September";
            break;
        case "10":
            day.innerHTML = "October";
        case "11":
            day.innerHTML = "November";
            break;
        case "12":
            day.innerHTML = "December";
    }
}

// Opdracht 15
