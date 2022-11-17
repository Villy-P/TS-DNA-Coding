let valueSetting: number = 1;

const letters: string[] = ["G", "C", "A", "T"];
const aminoLetter: string[] = ["A", "C", "G", "U"];

function resetGrid(): void {
    for (let i of problem.children)
        (i as HTMLInputElement).readOnly = false;
    allGood.setAttribute("style", "display:none");
    currentProblem = [];
    problem.innerHTML = "";
    problem.setAttribute("style", `grid-template-columns: ${"minmax(69px, 100px) ".repeat(valueSetting)};`);
}

function generateProblem(): void {
    resetGrid();
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
    const l: string[] = activitiesDropdown.value === "rna-to-amino-acid" ? aminoLetter : letters;
    return getRandomValueFromArray(l) + 
           getRandomValueFromArray(l) + 
           getRandomValueFromArray(l);
}

generateProblem();