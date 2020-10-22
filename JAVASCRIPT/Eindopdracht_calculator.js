let teken;
let memory;

// de cijfers intikken en laten zien op het scherm

function myFunction(val) {
    document.getElementById("display").value += val;
  }

// de c button, dus deleten van het content werkend krijgen
function clearScreen() {
    document.getElementById("display").value = "";
  }

//   de functie van komma laten zien op het scherm
function komma() {
    document.getElementById("display").value += ",";
  }

function plus() {
    memory = document.getElementById("display").value;
    document.getElementById("display").value = "";
    teken = "+";
}


function is() {
    if (teken == "+" ) {
        let antwoord = document.getElementById("display").value + memory;
        document.getElementById("display").value = antwoord;
    }
}