class Car{
    model:string ;
    price: number ;
    manufacture: string ;
    constructor(model:string ,price:number, manufacture:string){
         this.model = model ;
         this.manufacture = manufacture ;
         this.price = price;
    }

     getTotalPrice(tax:number):number{
         const taxAmount = this.price * tax / 100 ;
         const total = this.price + taxAmount ;
         return total ;
     }
}

const toyota = new Car('toyta',8000000 ,'japan') ;
const totalPrice:number = toyota.getTotalPrice(20);