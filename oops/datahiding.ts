class Bank{

    protected balance: number = 1000;

    public getBalance(): number{
        return this.balance;
    }

    public setBalance(balance: number): void{
        this.balance = balance;
    }


}
//private var / methods can access only within the class
//public var / methods can access outside the class
//protected var / methods can access only within the class and its child classes
var b = new Bank();
//b.balance = 2000;