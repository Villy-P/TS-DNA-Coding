"use strict";
settingsDropdown.onchange = function () {
    const text = settingsDropdown.options[settingsDropdown.selectedIndex].text;
    if (text !== "Random") {
        valueSetting = text.split(" ")[0];
        generateProblem();
    }
};
