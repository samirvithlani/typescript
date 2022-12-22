var Watch = /** @class */ (function () {
    function Watch(price) {
        //local variable
        //default constructor
        console.log("watch is created", price);
        this.price = price;
    }
    //method
    Watch.prototype.display = function () {
        console.log("price is ", this.price);
    };
    return Watch;
}());
var w = new Watch(15);
w.display();
