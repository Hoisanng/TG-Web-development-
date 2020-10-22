// Opdracht 1
let randomNumbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];
console.log(randomNumbers);

// Opdracht 2
let fruitSoorten = [
    "aardbei",
    "kiwi",
    "mangosteen",
    "mango",
    "peer"
   
];
console.log(fruitSoorten);

// Opdracht 3
let fruitSoorten1 = [
    "aardbei",
    "kiwi",
    "appel",
    "mango",
    "peer"
   
];
console.log(fruitSoorten1[2]);

// Opdracht 4
let fruitSoorten2 = [
    "aardbei",
    "kiwi",
    "appel",
    "mango",
    "peer"
   
];
console.log(fruitSoorten2[0]);

// Opdracht 5
let randomNumbers1 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];


let fruitSoorten3 = [
    "aardbei",
    "kiwi",
    "appel",
    "mango",
    "peer"
   
];

let randomNumbersmain = Math.floor(Math.random() *  randomNumbers1.length %5);
    let randomName = fruitSoorten3[randomNumbersmain];
    console.log(randomName)
    console.log(randomNumbersmain);

// Opdracht 6 en 7

let fruitSoorten4 = [
    "aardbei",
    "kiwi",
    "appel",
    "mango",
    "peer"
   
];

fruitSoorten4.push("Kiwi");
console.log(fruitSoorten4);
//hij voegt kiwi bij de lijst toe.
fruitSoorten4.pop();
console.log(fruitSoorten4);
//haalt de laatste item (in dit geval kiwi) eraf.
fruitSoorten4.shift();
console.log(fruitSoorten4);
//haalt de eerste item weg (in dit geval aardbei).
let green = fruitSoorten4.slice(1, 3);
console.log(green); 
//selecteert wat er op de plek staat op 1,3.
fruitSoorten4.splice(0, 2, "Lemon", "Kiwi");
console.log(fruitSoorten4)
//eerste parameter(0) is waar je het invoegt. Tweede parameter betekent hoeveel elemeenten haal je weg.
fruitSoorten4.sort();
console.log(fruitSoorten4)
// Sorteert de fruitsoorten op alfabetische volgorde.
console.log(fruitSoorten4.length)
// Opdracht 7

// Opdracht 8
let fruitSoorten5 = [
    "aardbei",
    "kiwi",
    "appel",
    "mango",
    "peer"
   
];

fruitSoorten5.splice(4, 1, "Sinaasappel");
console.log(fruitSoorten5)
fruitSoorten5[4] = "aardbei";
fruitSoorten5[0] = "mango";
console.log(fruitSoorten5)
