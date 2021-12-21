var product = /** @class */ (function () {
    function product() {
        this.pid = 1;
        this.pname = "dhhd";
        this.amount = 45;
        this.qty = 8;
    }
    product.prototype.discunt = function () {
        var discount = this.amount * 0.1;
        this.amount = discount + this.amount;
        console.log(this.amount);
    };
    return product;
}());
var p = new product;
p.discunt();
