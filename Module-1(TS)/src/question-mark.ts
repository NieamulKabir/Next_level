//ternary operator

const age: number = 22;

// if(age>=18){
//     console.log("Yes");
// }
// else{
//     console.log('No');
// }

const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);

// Nullish coalescing operator
// NUll and undefined

const isAuthenticatedUser = null;
const userName = isAuthenticatedUser ?? 'Guest'
console.log(userName);

type Manus = {
    name: string;
    age: number;
    address: {
        city: "No city";
        road: "No road";
        home?: "";
    };
};

const manus1: Manus = {
    name: "Manus",
    age: 100,
    address: {
        city: "No city",
        road: "No road",

    }
}
const home = manus1?.address?.home ?? "No Home";
console.log({home});