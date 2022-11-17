function getRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

settingsDropdown.onchange = function() {
    const text: string = settingsDropdown.options[settingsDropdown.selectedIndex].text;
    valueSetting = text !== "Random" ? text.split(" ")[0] as unknown as number : getRandomValue(1, 10);
    generateProblem();
}

activitiesDropdown.onchange = function() {
    generateProblem();
}