import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';
// import { Router } from 'express';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrl: './foodpage.component.css'
})
export class FoodpageComponent implements OnInit{

  food!:Foods;
  constructor(private activatedRoute:ActivatedRoute,
    private foodServiced:FoodService,
    private cartService:CartService,
    private router:Router
  ) { 
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food = foodServiced.getFoodById(params['id'])
    })
  }

  ngOnInit(): void {
  }
  addtoCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
