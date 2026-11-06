"use script";

let amount = Number(prompt("How many participants?"));

let names = [];

for (let i = 0; i < amount; i++) {
    let name = prompt("Enter participant name:");
    names.push(name);
}

names.sort();

let list = document.getElementById("participants");

for (let i = 0; i < names.length; i++) {
    let li = document.createElement("li");
    li.textContent = names[i];
    list.appendChild(li);
}
