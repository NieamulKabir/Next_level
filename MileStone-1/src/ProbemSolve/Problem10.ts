//Create a function that takes a parameter which can be either a string or an array of strings. If it's a string, return the uppercase version of the string. If it's an array of strings, return an array with each string in uppercase.

function convertToUpperCase(param: string | string[]): string | string[] | undefined {
    if (typeof param === "string") {
        return param.toUpperCase();
    }
    else if (Array.isArray(param)) {
        return param.map(element => element.toUpperCase());
    }
    else {
        throw new Error('Invalid Input');
    }
}

const stringResult= convertToUpperCase('Nieamul');
console.log(stringResult);

const stringArryResult= convertToUpperCase(['Afra','Aysha','Nieamul','Kabir']);
console.log(stringArryResult);