let displayTranslationChart: boolean = false;
let displayHint: boolean = false;

let valueSetting: number = 2;

const chartButton: Element = document.querySelector("#activateChart")!;
const chart: Element = document.querySelector(".container")!;

const hintButton: Element = document.querySelector("#activateHint")!;
const hint: Element = document.querySelector("#hint")!;

const activitiesDropdown: HTMLSelectElement = document.getElementById("activities") as HTMLSelectElement;
const settingsDropdown: HTMLSelectElement = document.getElementById("settings") as HTMLSelectElement;

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

function generateProblem(): void {
    problem.setAttribute("style", `grid-template-columns: ${"1fr ".repeat(valueSetting)};`);
    for (let i of ["CGC", "ATA"]) {
        let cell: HTMLDivElement = document.createElement("div");
        cell.innerHTML = i;
        problem.appendChild(cell);
    }
    for (let i = 0; i < valueSetting; i++)
        problem.appendChild(document.createElement("textarea"));
}

generateProblem();