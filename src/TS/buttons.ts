let displayTranslationChart: boolean = false;
let displayHint: boolean = false;

let currentProblem: string[] = [];

const chartButton: Element = document.querySelector("#activateChart")!;
const chart: Element = document.querySelector(".container")!;

const hintButton: Element = document.querySelector("#activateHint")!;
const hint: Element = document.querySelector("#hint")!;

const activitiesDropdown: HTMLSelectElement = document.getElementById("activities") as HTMLSelectElement;
const settingsDropdown: HTMLSelectElement = document.getElementById("settings") as HTMLSelectElement;

const solveButton: Element = document.querySelector("#solve")!;

const problem: HTMLElement = document.getElementById("problem")!;

function clickDisplayTranslationChart(): void {
    displayTranslationChart = !displayTranslationChart;
    chart.setAttribute("style", `display: ${displayTranslationChart ? "grid" : "none"};`)
    chartButton.innerHTML = displayTranslationChart ? "Hide Translation Chart" : "Show Translation Chart";
}

function getHint(): string {
    switch (activitiesDropdown.value) {
        case "match-dna":
            return "<pre>A turns to T\nT turns to A\nG turns to C\nC turns to G\n</pre>";
        default:
            throw new Error("ID not found for: " + activitiesDropdown.value);
    }
}

function clickDisplayHint(): void {
    displayHint = !displayHint;
    hintButton.innerHTML = displayHint ? "Hide Hint" : "Show Hint";
    hint.innerHTML = displayHint ? getHint() : "";
}

function swap(s: string): string {
    let str: string = "";
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

function solve(): void {
    const children: HTMLCollection = problem.children;
    for (let i = valueSetting; i < children.length; i++) {
        children[i].classList.remove("correct");
        children[i].classList.remove("wrong");
        swap((children[i] as HTMLInputElement).value.toLowerCase()) == currentProblem[i - valueSetting] ? children[i].classList.add("correct") : children[i].classList.add("wrong");
    }
}