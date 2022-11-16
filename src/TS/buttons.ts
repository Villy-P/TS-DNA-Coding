let displayTranslationChart: boolean = false;
let displayHint: boolean = false;

const chartButton: Element = document.querySelector("#activateChart")!;
const chart: Element = document.querySelector(".container")!;

const hintButton: Element = document.querySelector("#activateHint")!;
const hint: Element = document.querySelector("#hint")!;

const activitiesDropdown = document.getElementById("activities") as HTMLSelectElement;

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