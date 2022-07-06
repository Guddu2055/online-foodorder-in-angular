import { Component, Input, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { CartService } from '../service/cart/cart.service';
import { Cart, CartItem } from '../shared/models/cartItem';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent  {
  
 cart!:Cart;
 submitForm = new FormGroup({
  name: new FormControl(),
  address: new FormControl(),
  cardnumber:new FormControl(),
  expiry:new FormControl(),
  amount:new FormControl()
});
 constructor(private cartService:CartService,
  ) {
   this.setCart();
  }
  onSubmit(): void {
    
  }
  send(){
    console.log(this.submitForm.value); 
  }


removeFromCart(cartItem:CartItem){
 this.cartService.removeFromCart(cartItem.food.id);
 this.setCart();
}

changeQuantity(cartItem:CartItem,quantityInString:string){
 const quantity=parseInt(quantityInString);
 this.cartService.changeQuantity(cartItem.food.id,quantity);
 this.setCart();
}
ngOnInit(): void{

}

 setCart(){
   this.cart=this.cartService.getCart();
 }

}
