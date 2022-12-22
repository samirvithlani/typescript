class Watch{

    ///defination: construnctors are used to initialize the instance variables
    //constructor
    price:number; //instance variable
    constructor(price:number){
        //local variable
        //default constructor
        console.log("watch is created",price);
        this.price = price;
    }

    //method
    display():number{
        console.log("price is ",this.price);
        return this.price;
    }


}
var w = new Watch(15);
w.display();
