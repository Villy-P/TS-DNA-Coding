let displayTranslationChart: boolean = false;

const chartButton: Element = document.querySelector("#activateChart")!;
const chart: Element = document.querySelector(".container")!;

function clickDisplayTranslationChart() {
    displayTranslationChart = !displayTranslationChart;
    chart.setAttribute("style", `display: ${displayTranslationChart ? "grid" : "none"};`)
    chartButton.innerHTML = displayTranslationChart ? "Hide Translation Chart" : "Show Translation Chart";
}