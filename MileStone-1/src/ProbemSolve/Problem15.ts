//Create a generic function called filterArray that takes an array of any type and a predicate function as parameters. The function should return a new array that contains only the elements for which the predicate function returns true. Ensure that the function is flexible enough to work with different types of arrays.


function filterArray<T>(arr:T[],predicate:(value:T)=>boolean):T[]{
    const filterArray:T[]=[];
    for(const element of arr){
        if(predicate(element)){
            filterArray.push(element);
        }
    }
    return filterArray;
};

const numbersP15=[1,2,3,4,5];
const evenNum = filterArray(numbersP15,(num)=>num%2===0);
console.log(evenNum);

const namesP15 = ['Alice', 'Bob', 'Charlie', 'Dave'];
const longNames = filterArray(namesP15, (name) => name.length > 4);
console.log(longNames); 