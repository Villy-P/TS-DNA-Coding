"use strict";
let valueSetting = 5;
const letters = ["G", "C", "A", "T"];
function generateProblem() {
    for (let i of problem.children)
        i.disabled = false;
    currentProblem = [];
    problem.innerHTML = "";
    problem.setAttribute("style", `grid-template-columns: ${"minmax(69px, 100px) ".repeat(valueSetting)};`);
    for (let i = 0; i < valueSetting; i++) {
        const cell = document.createElement("div");
        cell.innerHTML = generateRandomSequence();
        currentProblem.push(cell.innerHTML);
        problem.appendChild(cell);
    }
    for (let i = 0; i < valueSetting; i++) {
        const input = document.createElement("input");
        input.type = "text";
        problem.appendChild(input);
    }
}
function getRandomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function generateRandomSequence() {
    return getRandomValueFromArray(letters) +
        getRandomValueFromArray(letters) +
        getRandomValueFromArray(letters);
}
generateProblem();
