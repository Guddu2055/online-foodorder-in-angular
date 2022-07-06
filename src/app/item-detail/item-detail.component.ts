import { Component, OnInit } from '@angular/core';

import { CartService } from '../service/cart/cart.service';
import {  Cart, CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
 
 
 cart!:Cart;
  constructor(private cartService:CartService,
   ) {
    this.setCart();
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