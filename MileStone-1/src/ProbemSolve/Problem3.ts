//Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.


const length1:number=5;
const width:number=10;

function calculateArea(length1:number,width:number):number{
    return length1* width;
}

const area:number=calculateArea(length1,width);
console.log(area);