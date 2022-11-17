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
        case "dna-to-rna":
            return "<pre>A turns to U\nT turns to A\nG turns to C\nC turns to G\n</pre>";
        case "rna-to-amino-acid":
            return "<pre>Use the translation chart.\nEither use the name or the shortened version of the name.\n</pre>";
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
                if (activitiesDropdown.value === "match-dna")
                    str += 'A';
                break;
            case 'U':
                if (activitiesDropdown.value !== "match-dna")
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
        const child = children[i];
        child.classList.remove("correct");
        child.classList.remove("wrong");
        swap(child.value.toUpperCase()) == currentProblem[i - valueSetting] ? child.classList.add("correct") : child.classList.add("wrong");
        if (child.classList.contains("wrong"))
            hadWrong = true;
    }
    for (let i of children)
        if (i.classList.contains("correct"))
            i.readOnly = true;
    if (!hadWrong)
        allGood.setAttribute("style", "display: text");
}
