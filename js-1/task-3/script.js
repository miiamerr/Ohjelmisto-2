"use strict";

const number1 = Number(prompt("Enter the first integer: "));
const number2 = Number(prompt("Enter your second integer:"));
const number3 = Number(prompt("Enter your third integer:"));

const sum = number1 + number2 + number3;
const product = number1 * number2 * number3;
const average = sum / 3;

document.querySelector("#target").innerHTML =
"Sum: " + sum + "<br>" +
"Product : " + product + "<br>" +
"Average: " + average + "<br>;"