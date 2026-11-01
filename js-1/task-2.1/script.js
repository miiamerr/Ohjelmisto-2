"use script";

const number = Number(prompt("Enter integer:"));

if (number < 2) {
    document.querySelector("#target").textContent =
        number + " is not a prime number.";

} else {
    let hasDivisor = false;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            hasDivisor = true;
        }
    }

    if (hasDivisor) {
        document.querySelector("#target").textContent =
            number + " is not a prime number.";
    } else {
        document.querySelector("#target").textContent =
            number + " is a prime number.";
    }
}
