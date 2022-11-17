"use strict";
let displayTranslationChart = false;
let displayHint = false;
let currentProblem = [];
const chartButton = document.querySelector("#activateChart");
const chart = document.querySelector(".container");
const hintButton = document.querySelector("#activateHint");
const hint = document.querySelector("#hint");
const activitiesDropdown = document.getElementById("activities");
const settingsDropdown = document.getElementById("settings");
const solveButton = document.querySelector("#solve");
const problem = document.getElementById("problem");
const allGood = document.getElementById("allGood");
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
function swap(s) {
    let str = "";
    for (let i of s.split("")) {
        switch (i) {
            case 'T':
                str += 'A';
                break;
            case 'A':
                str += 'T';
                break;
            case 'C':
                str += 'G';
                break;
            case 'G':
                str += 'C';
                break;
        }
    }
    return str;
}
function solve() {
    const children = problem.children;
    let hadWrong = false;
    for (let i = valueSetting; i < children.length; i++) {
        children[i].classList.remove("correct");
        children[i].classList.remove("wrong");
        swap(children[i].value.toUpperCase()) == currentProblem[i - valueSetting] ? children[i].classList.add("correct") : children[i].classList.add("wrong");
        if (children[i].classList.contains("wrong"))
            hadWrong = true;
    }
    for (let i of children)
        if (i.classList.contains("correct"))
            i.readOnly = true;
    if (!hadWrong)
        allGood.setAttribute("style", "display: text");
}
