//Create a TypeScript program that uses a conditional type to create a new type that is either a string or a number, depending on whether a parameter of type string or number is passed to the function.

//Then, create an interface for a person with properties name and age, and use the new type as a constraint on the age property.

//Finally, create an object that satisfies the Person interface and log it to the console.

type StringOrNumber<T> = T extends string ? string : number;

interface PersonOP {
  name: string;
  age: StringOrNumber<any>;
}

const personOp: PersonOP = {
  name: "Alice",
  age: 25,
};

console.log(personOp);
