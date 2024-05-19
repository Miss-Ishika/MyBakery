import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { GpayComponent } from './gpay/gpay.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchItem', component:HomeComponent},
  {path:'food/:id', component:FoodpageComponent},
  {path:'cart-page', component:CartPageComponent},
  {path:'signin', component:SigninComponent},
  {path: 'signup', component:SignupComponent},
  {path:'header', component:HeaderComponent},
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'checkout', component:CheckoutComponent},
  {path: 'gpay', component:GpayComponent},
  {path: 'map', component:MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
