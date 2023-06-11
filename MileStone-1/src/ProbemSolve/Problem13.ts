//Create a generic function that takes an array of elements and returns the first element of the array. Add a constraint to ensure that the generic type can be compared using the > operator.


function getFirstElement<T extends number | string>(arr: T[]): T | undefined {
    if (arr.length > 0) {
        return arr[3];
    }
    else {
        return undefined;
    }
};

const numbersPr13: number[] = [1, 2, 3,4,5,6];
const firstNumber = getFirstElement(numbersPr13);
console.log(firstNumber);

const stringPrbl13: string[] = ['Kabir', 'Afra', 'Nieamul','Habiba','Arif'];
const firstString = getFirstElement(stringPrbl13);
console.log(firstString);