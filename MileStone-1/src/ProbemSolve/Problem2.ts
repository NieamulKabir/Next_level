//Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.

interface PersonProblem{
    name:string;
    age:number;
    email:string;
}

const personObj:PersonProblem={
    name:"Kabir",
    age:25,
    email:"kabir@gmail.com"
};

console.log(personObj.name);
console.log(personObj.age);
console.log(personObj.email);