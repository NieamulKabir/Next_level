
class Person {

    constructor(public name: string, public age: number, public address: string) { };
    makeSleep(hours: number): string {
        return `This ${this.name} will sleep ${hours}`;
    }
}

class Student extends Person {
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }
};
const student10= new Student("Kabir",22,"Mirpur");


class Teacher extends Person{

    constructor( name: string, age: number,  address: string, public designation: string) { 
        super(name,age,address);
    };

    takeClasses(takeClass: number): string {
        return `This ${this.name} will take ${takeClass}`;
    };
};

const teacher= new Teacher("Nieamul",25,"Mirpur","teacher");
 