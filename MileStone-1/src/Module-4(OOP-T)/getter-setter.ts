class BankAccount {
    public id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    };

    
    //getter
    get balance(): number {
        return this._balance;
    }
    //setter
    set Deposit(amount: number) {
         this._balance = this._balance + amount;
    }


    getBAlance() {
        console.log(`My current balance is ${this._balance}`);
    };
    addDeposit(amount: number) {
        return this._balance = this._balance + amount;
    };
};

const myAccount = new BankAccount(1924, "Kabir", 20);
// myAccount.balance = 0;
console.log(myAccount);
console.log(myAccount.addDeposit(20));
myAccount.getBAlance();

console.log(myAccount.balance);
myAccount.Deposit = 20;
console.log(myAccount.balance);