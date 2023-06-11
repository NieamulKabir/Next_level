type CrushType = {
    name: string;
    age?: number;
    profession: string;
    address: string
}

const crush1: CrushType = {
    name: "Moina Pakhi",
    age: 20,
    profession: "Web Developer",
    address: "Uganda"
};

const crush2: CrushType = {
    name: "Tia Pakhi",
    profession: "Next level web Development",
    address: "Uganda"
}

type OperationType =(x:number,y:number)=>number

const calculate = (number1: number, number2: number, operation: OperationType) => operation(number1, number2);

calculate(20, 20, (x, y) => x + y);
calculate(20, 20, (x, y) => x - y);
calculate(20, 20, (x, y) => x * y);