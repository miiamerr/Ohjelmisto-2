"use script";

const target = document.getElementById("li");

const firstItem = document.createElement("li");
firstItem.textContent = "First item";

const secondElement = document.createElement("li");
secondElement.textContent = "Second item";
secondItem.classlist.add("my-item");

const thirdElement = document.createElement("li");
thirdElement.textContent = "Third item";

target.appendChild(firstItem);
target.appendChild(secondElement);
target.appendChild(thirdElement);

