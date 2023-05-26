let emni: any;

(emni as string) = "Next Level Web Development";

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The Converted result is: ${value} gram`;
    } else if (typeof param === "number") {
        const value = param * 1000;
        return `The Converted result is: ${value} gram`;
    }
}
const resultToBeNumber = kgToGram(1000) as number;
const resultToBeString = kgToGram(1000) as string;