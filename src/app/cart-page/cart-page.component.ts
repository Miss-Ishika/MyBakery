import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService
  ) {
    
    this.setCart();
   }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  // OnInit(): void {
  // }
  setCart() {
    this.cart = this.cartService.getCard();
  }
  removeFromCart(CartItem: CartItem) {
      this.cartService.removeFromCart(CartItem.food.id);
      this.setCart();
  }
  changeQuantity(CartItem: CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(CartItem.food.id, quantity);
    this.setCart();
    }
  }
  

