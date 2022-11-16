let displayTranslationChart: boolean = false;

function clickDisplayTranslationChart() {
    let chartButton: Element = document.querySelector("#activateChart")!;
    let chart: Element = document.querySelector(".container")!;
    displayTranslationChart = !displayTranslationChart;
    chart.setAttribute("style", `display: ${displayTranslationChart ? "grid" : "none"};`)
    chartButton.innerHTML = displayTranslationChart ? "Hide Translation Chart" : "Show Translation Chart";
}