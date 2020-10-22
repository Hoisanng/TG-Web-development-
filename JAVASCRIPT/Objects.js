// Opdracht 1
const Club = function(nameclub, typesport, aantalleden, contactgegevens) {
    this.name = nameclub;
    this.type = typesport;
    this.aantal = aantalleden;    
    this.contactgegevens = contactgegevens;
}

// Opdracht 2
const Contactgegevens = function (adres, telefoonnr, contactpersoon) {
    this.adres = adres;
    this.telefoonnr = telefoonnr;
    this.contactpersoon = contactpersoon;
}

// Opdracht 3
let clubs = ["ajax", "psv", "vitesse", "feijenoord"];

for (i = 0; i < clubs.length; i++) {
    console.log(clubs[i])
}

// Opdracht 4
function Person (name, age) {
    this.name = name;
    this.age = age;
}

const persons = [
    new Person("Jan", 24),
    new Person("Klaas", 15),
    new Person("Yanis", 42),
    new Person("Rupel", 55),
    new Person("Hendrik", 32),
    new Person("Mono", 28),
    new Person("West", 23),
]

console.log(persons.sort(function(a, b){return a.age - b.age}));


