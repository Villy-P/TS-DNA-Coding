let valueSetting: number = 1;

const letters: string[] = ["G", "C", "A", "T"];

function generateProblem(): void {
    for (let i of problem.children)
        (i as HTMLInputElement).readOnly = false;
    allGood.setAttribute("style", "display:none");
    currentProblem = [];
    problem.innerHTML = "";
    problem.setAttribute("style", `grid-template-columns: ${"minmax(69px, 100px) ".repeat(valueSetting)};`);
    for (let i = 0; i < valueSetting; i++) {
        const cell: HTMLDivElement = document.createElement("div");
        cell.innerHTML = generateRandomSequence();
        currentProblem.push(cell.innerHTML);
        problem.appendChild(cell);
    }
    for (let i = 0; i < valueSetting; i++) {
        const input = document.createElement("input");
        input.type = "text";
        problem.appendChild(input);
    }
}

function getRandomValueFromArray(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)];
}

function generateRandomSequence(): string {
    return getRandomValueFromArray(letters) + 
           getRandomValueFromArray(letters) + 
           getRandomValueFromArray(letters);
}

generateProblem();