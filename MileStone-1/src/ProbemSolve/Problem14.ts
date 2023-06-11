//Create a function that takes two parameters: one can be either a string or number, and the other can be either a boolean or an array of strings. Implement logic in the function to perform different operations based on the types of the parameters.


function performOperation(param1:string|number,param2: boolean|string[]):void{
    if(typeof param1==="string" && Array.isArray(param2)){
        console.log('Perform Operation 1');
        console.log(`Param1: ${param1.toUpperCase()}`);
        console.log(`Param2: ${param2.length}`);
    }
    else if(typeof param1==='number' && typeof param2 === 'boolean'){
        console.log('Performing operation 2');
        console.log(`Pram1 : ${param1* param1}`);
        console.log(`Param2: ${param2}`);
    }
    else{
        console.log('Invalid Parameter Type');
    }

};

performOperation('hello',['kabir','afra','nieamul']);
performOperation(10,true);
performOperation(10,['kabir','Rubia','Habiba']);

