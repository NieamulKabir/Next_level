//Create a TypeScript class called Person that has private properties name and age, and a public method getDetails that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.

//Create a TypeScript class called Student that extends the Person class and has an additional private property grade. Define a public method getGrade that returns the student's grade. Use the super keyword to call the constructor of the Person class and initialize the name and age properties.

class PersonA {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };

    public getDetails(): string {
        return (`Name : ${this.name}, Age: ${this.age}`)
    };
};

class StudentA extends PersonA {
    private grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    };
    public getGrade():string{
        return (`Grade: ${this.grade}`)
    };
};

const personDetails= new PersonA('Kabir',25);
console.log(personDetails.getDetails());

const studentDetails= new StudentA("Nieamul",25,'A+');
console.log(studentDetails.getDetails());
console.log(studentDetails.getGrade());