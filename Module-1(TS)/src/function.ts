function add(num1: number, num2: number): number {
    return num1 + num2;
}
add(2, 2);

const add2 = (num1: number, num2: number): number => num1 + num2;

//callback function
const arr = [1, 2, 3];
const newArray = arr.map((elem: number) => elem * elem);


const person:{
    name:string,
    balance:number,
    addBalance(money:number):number 
} = {
    name: 'Kabir',
    balance: 5,
    addBalance(money: number) {
        return this.balance + money;
    }
}
const person2:{
    name:string,
    balance:number,
    addBalance(money:number):string //return type na thakle void
} = {
    name: 'Kabir',
    balance: 5,
    addBalance(money: number) {
        return `My New Balance is ${this.balance + money}`;
    }
}


//spread operator
const myFriends=['jodu','modu','kodu'];
const newFriend=['Kabir','Nieamul','Afra'];

myFriends.push(...newFriend);

//rest parameter
const greetFriends=(...friends:string[]):void=>friends.forEach((friend)=>console.log(`Hi ${friend}`));

greetFriends("habiba","Rubia","Ekram");