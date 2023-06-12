//Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.



function checkInput(param: unknown): void {
    if (typeof param === "string") {
        console.log(`Input Value:- ${param}`);
    }else{
        throw new Error('Invalid Input');
    }
}
checkInput('Next Level');
checkInput(2);