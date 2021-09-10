class Car{
    model:string ;
    price: number ;
    manufacture: string ;
    private _millage : number ;
    constructor(model:string ,price:number, manufacture:string){
         this.model = model ;
         this.manufacture = manufacture ;
         this.price = price;
         this._millage = 1000000 ;
    }
     getActualMillage ():number{
         const realMillage = this._millage + 50000 ;
         return realMillage;
     }
     getTotalPrice(tax:number):number{
         const taxAmount = this.price * tax / 100 ;
         const total = this.price + taxAmount ;
         return total ;
     }
}

const toyota = new Car('toyta',8000000 ,'japan') ;
const totalPrice:number = toyota.getTotalPrice(20);