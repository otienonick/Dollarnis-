function Order( size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
 

Order.prototype.fullOrder = function () {
    return   this.size + ' pizza with a crust of ' + this.crust + " and a topping of " + this.topping ;
};
};
function Total(quantity, pizzaPrice,crustPrice,toppingPrice){
    this.quantity = quantity;
    this.pizzaPrice = pizzaPrice;
    this.crustPrice = crustPrice;
    this.toppingPrice = toppingPrice;



Total.prototype.totalCash = function() {
    return  this.quantity * (this.pizzaPrice + this.crustPrice + this.toppingPrice)
};
};
