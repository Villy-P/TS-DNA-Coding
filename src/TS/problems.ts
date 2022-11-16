let valueSetting: number = 5;

const problem: HTMLElement = document.getElementById("problem")!;

const letters: string[] = ["G", "C", "A", "T"];

function generateProblem(): void {
    problem.setAttribute("style", `grid-template-columns: ${"minmax(50px, 100px) ".repeat(valueSetting)};`);
    for (let i = 0; i < valueSetting; i++) {
        const cell: HTMLDivElement = document.createElement("div");
        cell.innerHTML = generateRandomSequence();
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