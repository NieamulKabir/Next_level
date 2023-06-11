//Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes objects of type Car and Driver and returns an object with the combined properties of both types.

interface ICAR{
    make:string;
    model:string;
    year:number;
};

interface IDriver{
    name:string;
    licenseNumber:number;
}

function CarDriver(car:ICAR,driver:IDriver):{car:ICAR,driver:IDriver}{
    return {
        car:car,
        driver:driver
    };
}

const myCar:ICAR ={
    make:"Tesla",
    model:"Tesla Power House",
year:2023
}
const myDriver:IDriver={
    name:"Nieamul",
    licenseNumber:181151924
}

console.log(CarDriver(myCar,myDriver));

