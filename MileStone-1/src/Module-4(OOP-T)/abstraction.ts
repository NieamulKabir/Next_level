

//interface

// interface IVehicle{
//     name:string;
//     model:string;
// }
// const vehicle:IVehicle={
//     name:'car',
//     model:"290"
// }

// interface IVehicle {
//     startEngine(): void;
//     stopEngine(): void;
//     move(): void;
// };

// class vehicle implements IVehicle {

//     constructor(
//         public name: string,
//         public brand: string,
//         public model: number,
//     ) { };

//     startEngine(): void {
//         console.log("I am starting Engine");
//     };
//     stopEngine(): void {
//         console.log("I am stopping Engine");
//     };
//     move(): void {
//         console.log("I am Moving Engine");
//     }
//     test() {
//         console.log('I am for testing purpose');
//     };
// };

// const vehicle10 = new vehicle("car", "Toyota", 2000);


//abstract

abstract class Vehicle {
    constructor(
        public name: string,
        public brand: string,
        public model: number,
    ) { };

    abstract startEngine(): void;
    abstract stopEngine(): void;

    move(): void {
        console.log("I am Moving Engine");
    }

};

class Car extends Vehicle {
    startEngine(): void {
        console.log("I am starting Engine");
    };
    stopEngine(): void {
        console.log("I am stopping Engine");
    };
};
// const car1= new Vehicle('car','Honda',2023);