// Opdracht 1

const sports
= ["voetbal", "basketbal", "volleybal", "hockey", "honkbal", "zwemmen", "kortbal"]

for (i = 0; i < sports.length; i++) { 
    (sports[i]);
    console.log(sports[i])
  }

// Opdracht 2
for (let x=0; x<=20; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}

// Opdracht 3
for (let i=0; i < sports.length; i++) {
    if (i === 0) {
            console.log(sports[i] +  " is even");
    }
    else if (i % 2 === 0) {
            console.log(sports[i] + " is even");   
    }
    else {
            console.log(sports[i] + " is odd");
    }
}

// Opdracht 4
i = 0;
while (i < sports.length) {
  console.log(sports[i]);
  i++;
}

// Opdracht 5
const sports1
= ["voetbal", "basketbal", "volleybal", "hockey", "honkbal", "zwemmen", "kortbal"]
let sport;
for (sport in sports1) {
    console.log(sports1[sport])
}

// Opdracht 6
const sports2
= ["voetbal", "basketbal", "volleybal", "hockey", "honkbal", "zwemmen", "kortbal"]
let sport1;
for (sport1 of sports2) {
    console.log(sport1)
}
