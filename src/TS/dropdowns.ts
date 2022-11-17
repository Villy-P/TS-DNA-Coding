settingsDropdown.onchange = function() {
    const text: string = settingsDropdown.options[settingsDropdown.selectedIndex].text;
    if (text !== "Random") {
        valueSetting = text.split(" ")[0] as unknown as number;
        generateProblem();
    }
}