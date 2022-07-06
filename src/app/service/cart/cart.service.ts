import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/cartItem';
import { food } from 'src/app/shared/models/food';
import { CartItem } from 'src/app/shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=new Cart()
  
  addToCart(food:food):void{
    let cartItem=this.cart.Items.find(item=>item.food.id==food.id);
    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity +1);
      return;
    }
    this.cart.Items.push(new CartItem(food));
  }
  removeFromCart(foodId:number):void{
    this.cart.Items=this.cart.Items.filter(item=>item.food.id !=foodId);
  }
  clearCart() {
    this.cart.Items = [];
    return this.cart;
  }
  changeQuantity(foodId:number,quantity:number){
    let cartItem=this.cart.Items.find(item=>item.food.id ==foodId);
    if(!cartItem)
    return;
    cartItem.quantity=quantity;
  }
  getCart():Cart{
    return this.cart;
  }
}
