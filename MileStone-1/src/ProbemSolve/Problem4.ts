//Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.

function reverseArray<T>(array: T[]): T[] {
    return array.reverse();
}

const numbersArray: number[] = [1, 2, 3, 4, 5, 6];
const stringArray: string[] = ['kabir', 'Nieamul', 'Afra'];

console.log(reverseArray(numbersArray));
console.log(reverseArray(stringArray));