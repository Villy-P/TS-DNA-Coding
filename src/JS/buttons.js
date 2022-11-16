"use strict";
let displayTranslationChart = false;
let displayHint = false;
let valueSetting = 2;
const chartButton = document.querySelector("#activateChart");
const chart = document.querySelector(".container");
const hintButton = document.querySelector("#activateHint");
const hint = document.querySelector("#hint");
const activitiesDropdown = document.getElementById("activities");
const settingsDropdown = document.getElementById("settings");
const problem = document.getElementById("problem");
function clickDisplayTranslationChart() {
    displayTranslationChart = !displayTranslationChart;
    chart.setAttribute("style", `display: ${displayTranslationChart ? "grid" : "none"};`);
    chartButton.innerHTML = displayTranslationChart ? "Hide Translation Chart" : "Show Translation Chart";
}
function getHint() {
    switch (activitiesDropdown.value) {
        case "match-dna":
            return "<pre>A turns to T\nT turns to A\nG turns to C\nC turns to G\n</pre>";
        default:
            throw new Error("ID not found for: " + activitiesDropdown.value);
    }
}
function clickDisplayHint() {
    displayHint = !displayHint;
    hintButton.innerHTML = displayHint ? "Hide Hint" : "Show Hint";
    hint.innerHTML = displayHint ? getHint() : "";
}
function generateProblem() {
    problem.setAttribute("style", `grid-template-columns: ${"1fr ".repeat(valueSetting)};`);
    for (let i of ["CGC", "ATA"]) {
        let cell = document.createElement("div");
        cell.innerHTML = i;
        problem.appendChild(cell);
    }
    for (let i = 0; i < valueSetting; i++)
        problem.appendChild(document.createElement("textarea"));
}
generateProblem();
