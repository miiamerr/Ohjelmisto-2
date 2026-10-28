"use script";

const name = prompt("What is your name?");
const random_number = Math.floor(Math.random() * 4) + 1;

if (random_number === 1) {
    document.querySelector("#target").textContent =
    name + ", you are Gryffindor.";
} else if (random_number === 2) {
    document.querySelector("#target").textContent =
    name + ", you are Slytherin.";
} else if (random_number === 3) {
    document.querySelector("#target").textContent =
    name + ", you are Hufflepuff."
} else {
    document.querySelector("#target").textContent =
    name + ", you are Ravenclaw."
}