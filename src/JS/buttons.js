"use strict";
let displayTranslationChart = false;
function clickDisplayTranslationChart() {
    let chartButton = document.querySelector("#activateChart");
    let chart = document.querySelector(".container");
    displayTranslationChart = !displayTranslationChart;
    chart.setAttribute("style", `display: ${displayTranslationChart ? "grid" : "none"};`);
    chartButton.innerHTML = displayTranslationChart ? "Hide Translation Chart" : "Show Translation Chart";
}
