"use strict";
let valueSetting = 1;
const letters = ["G", "C", "A", "T"];
const aminoLetter = ["A", "C", "G", "U"];
function resetGrid() {
    for (let i of problem.children)
        i.readOnly = false;
    currentProblem = [];
    allGood.setAttribute("style", "display:none");
    problem.innerHTML = "";
    problem.setAttribute("style", `grid-template-columns: ${"minmax(69px, 100px) ".repeat(valueSetting)};`);
}
function generateProblem() {
    resetGrid();
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
    const l = activitiesDropdown.value === "rna-to-amino-acid" ? aminoLetter : letters;
    return getRandomValueFromArray(l) +
        getRandomValueFromArray(l) +
        getRandomValueFromArray(l);
}
generateProblem();
