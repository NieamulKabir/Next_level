//Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type.

function processInput(input:unknown):void{
    if(typeof input ==="number"){
        console.log(`Input is a number: ${input *2}`);
    }
    else if(typeof input ==='string'){
        console.log(`Input is String: ${input.toUpperCase()}`);
    }
    else{
        console.log("Unknown input type");
    }
}
processInput(2);
processInput('Nieamul');
processInput(true)