//Write a function that takes in an array of objects with properties name and age, and returns only the objects where the person's age is greater than or equal to 18,

type Person1111 = {
    name: string;
    age: number;
};

function adultPerson(person: Person1111[]): Person1111[] {
    return person.filter(p => p.age >= 18);
}

const personFilterAge:Person1111[]=[
    {
        name:"kabir",
        age:21
    },
    {
        name: "Nieamul",
        age:25
    },
    {
        name:"Afra",
        age:1.5
    }
];

console.log(adultPerson(personFilterAge));