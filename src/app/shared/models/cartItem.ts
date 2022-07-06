import { food } from "./food";

export class CartItem{
    constructor(food:food){
        this.food=food;
        this.price;
    }
    food:food; 
    quantity:number=1;
    get price():number{
        return this.food.price * this.quantity;
    }

}
export class Cart{
    Items:CartItem[]=[];
  static items: CartItem[];
    get totalPrice():number{
        let totalPrice = 0;
        this.Items.forEach(item =>{
            totalPrice += item.price
        });
        return totalPrice;
    }
}