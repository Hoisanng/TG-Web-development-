// Opdracht 1
function printCar() { 
    const carBrand = "Volvo"; 
    } 
    
console.log(carBrand);
// //hij geeft een foutmelding aan. Hier heb je te maken met local scope. 
// // De console.log staat niet binnen de functie en daarom logt (ziet) hij niet.

// // Opdracht 2
let carName; 
function printCar() { 
carBrand = "Volvo"; 
} 
console.log(carBrand); 

//dit is een global scope. het staat ook buiten de functie onderaan 
// waardoor hij het niet ziet en dus niet kan loggen.

// Opdracht 3
function printCar() { 
    carBrand = "Volvo"; 
    } 
    printCar(); 
    console.log(carBrand); 
// Hij spreekt eerst de functie aan waardoor hij wel kan loggen.

// Opdracht 4
function printCar() { 
    carBrand = "Volvo"; 
    return function(type) { 
    console.log(carBrand + " " + type); 
    } 
    } 
    const car = printCar(); 
    car("v40"); 
//de console log staatbinnen de functie van een functie. Volvo, spatie en dan verwijst die naar type wat v40 is.


