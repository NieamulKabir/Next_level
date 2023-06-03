class BankAccount {
    public id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    };
    getBAlance() {
        console.log(`My current balance is ${this._balance}`);
    };
    addDeposit(amount: number) {
        this._balance = this._balance + amount;
    };
};

class StudentAccount extends BankAccount{
    
}

const myAccount = new BankAccount(1924, "Kabir", 20);
// myAccount.balance = 0;
console.log(myAccount);