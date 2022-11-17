"use strict";
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
settingsDropdown.onchange = function () {
    const text = settingsDropdown.options[settingsDropdown.selectedIndex].text;
    valueSetting = text !== "Random" ? text.split(" ")[0] : getRandomValue(1, 10);
    generateProblem();
};
activitiesDropdown.onchange = function () {
    hint.innerHTML = displayHint ? getHint() : "";
    generateProblem();
};
