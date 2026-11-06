"use script";

let numbers = [];

while(true) {
    let number = Number(prompt("Enter a number: "));
    
    if (numbers.includes(number)) {
        alert("You have already entered this number!");
        break;
    }
    numbers.push(number);
}

numbers.sort(function(a, b) {
    return a - b;
});

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}