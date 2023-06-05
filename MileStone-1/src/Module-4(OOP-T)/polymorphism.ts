class Person30 {
    takeNap(): void {
        console.log('I am sleeping 8 Hour per day');
    };
};

class Student30 extends Person30 {
    takeNap(): void {
        console.log('I am sleeping 10 Hour per day');
    };
};

class Developer extends Person30 {
    takeNap(): void {
        console.log("I am sleeping 5 hour per day");
    };
};

function getNap(param: Person30) {
    param.takeNap();
}

const person22 = new Person30();
const person23 = new Student30();
const person24 = new Developer();

getNap(person22)
getNap(person23)
getNap(person24)

class Shape {
    getArea(): number {
        return 0;
    };
};

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    };
    getArea(): number {
        return Math.PI * (this.radius * this.radius);
    };
};

class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    };

    getArea(): number {
        return this.height*this.width
    }
}

function getAreaOfShape(param:Shape){
    console.log(param.getArea());
}

getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10,10))