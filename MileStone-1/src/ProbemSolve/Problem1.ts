//Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

function sumArray(numbers:number[]):number{
    let sum= 0;
    for(let element of numbers){
        sum +=element;
    }
    return sum;
};
const numbers:number[]=[1,2,3,4,5,6];
console.log(sumArray(numbers));