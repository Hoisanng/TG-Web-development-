let teken;
let memory;


// de cijfers intikken en laten zien op het scherm

function myFunction(val) {
  document.getElementById("display").value += val;
  document.getElementById("c").innerText = "C";
}

// de c button, dus deleten van het content werkend krijgen
function clearScreen() {
  document.getElementById("display").value = "";
  document.getElementById("c").innerText = "AC";
}

//   de functie van komma laten zien op het scherm
function komma() {
  document.getElementById("display").value += ".";
}

// De plus functie werkend krijgen.
function plus() {
  memory = document.getElementById("display").value;
  document.getElementById("display").value = "";
  teken = "+";
}

// De min functie werkend krijgen.

function min() {
  memory = document.getElementById("display").value;
  document.getElementById("display").value = "";
  teken = "-";
}

// De keer functie werkend krijgen.
function keer() {
  memory = document.getElementById("display").value;
  document.getElementById("display").value = "";
  teken = "*";
}

// De delen door functie werkend krijgen.
function delen() {
  memory = document.getElementById("display").value;
  document.getElementById("display").value = "";
  teken = "/";
}

// De modulo functie werkend krijgen.
function modulo() {
  memory = document.getElementById("display").value;
  document.getElementById("display").value = "";
  teken = "%";
}

// memory = 9
// value = 9

// eval(memory + value) = 99
// eval(memory + teken + value) = eval(9+9) = eval(3+2*5)

// memory += getal
// memory += teken
// memory += getal
// eval(getal+getal)

// De is functie werkend krijgen
function is() {
  if (teken == "+") {
    let antwoord = eval(memory + teken + document.getElementById("display").value);
    document.getElementById("display").value = antwoord.toFixed(2);
  }

  if (teken == "-") {
    let antwoord = eval(memory + teken + document.getElementById("display").value);
    document.getElementById("display").value = antwoord.toFixed(2);
  }

  if (teken == "*") {
    let antwoord = eval(memory + teken + document.getElementById("display").value);
    document.getElementById("display").value = antwoord.toFixed(2);
  }

  if (teken == "/") {
    let antwoord = eval(memory + teken + document.getElementById("display").value);
    document.getElementById("display").value = antwoord.toFixed(2);
  }

  if (teken == "%") {
    let antwoord = eval(memory + teken + document.getElementById("display").value);
    document.getElementById("display").value = antwoord.toFixed(2);
  }
}

// De min en plus teken werkend krijgen.
function plusmin() {
  let inputNumber = document.getElementById("display").value;
  inputNumber = inputNumber - (inputNumber * 2);
  document.getElementById("display").value = inputNumber;
}


