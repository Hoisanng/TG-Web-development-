// FUNCTIONS
// Opdracht 1
function print() {
    console.log("Hello World");
}

// Opdracht 2
function print(tekst) {
    console.log(tekst);
}

print("Hello World");

// Opdracht 3
function print(getal) {
    console.log(getal)
}
print(3)

// Opdracht 4
function vermenigvuldiging(getal, getal1) {

    return getal * getal1;
}
const result2 = vermenigvuldiging(4, 4);
console.log(result2);

// Opdracht 5
function Name() {
    let value, text;

    value = document.getElementById("number10").value;

    if (value == 'John') {
        text = "Dit is een bekende van ons";
    }
    else if (value == 'Olly') {
        text = "Dit is een bekende van ons";
    }
    else if (value == 'Mo') {
        text = "Dit is een bekende van ons";
    }
    else if (value == 'Hendrik') {
        text = "Dit is een bekende van ons";
    }
    else if (value == 'Tony') {
        text = "Dit is een bekende van ons";
    } else {
        text = "Onbekend in ons systeem";
    }
    document.getElementById("Name").innerHTML = text;
}

function name2() {
    let list = [
        "John",
        "Olly",
        "Mo",
        "Hendrik",
        "Tony",
        "Irus",
        "Jan",
        "Peter"
    ]

    let randomnumber = Math.floor(Math.random() * list.length);
    let randomname = list[randomnumber];
    console.log(randomname)
    console.log(randomnumber)
    return randomname;
} 

function name3() {
    let value, text;
    
    value = name2();

    if (value == 'John') {
        text = "Dit is een bekende van ons";
    }
    else if (value == 'Olly') {
        text = "Dit is een bekende van ons";
    }
    else if (value == 'Mo') {
        text = "Dit is een bekende van ons";
    }
    else if (value == 'Hendrik') {
        text = "Dit is een bekende van ons";
    }
    else if (value == 'Tony') {
        text = "Dit is een bekende van ons";
    } else {
        text = "Onbekend in ons systeem";
    }
    document.getElementById("Name2").innerHTML = text;
}

// Opdracht 7
function functionName(parameter1, parameter2 ) {
    // code to be executed
  }

function add(a, b, ...nums){
console.log(a)
console.log(b)
console.log(nums) }
const result = add(5, 10, 20, 30);

// Rest parameter is an improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array.




