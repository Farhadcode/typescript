"use strict";
class Car {
    constructor(model, price, manufacture) {
        this.model = model;
        this.manufacture = manufacture;
        this.price = price;
        this._millage = 1000000;
    }
    getActualMillage() {
        const realMillage = this._millage + 50000;
        return realMillage;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new Car('toyta', 8000000, 'japan');
const totalPrice = toyota.getTotalPrice(20);
