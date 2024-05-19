import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { GooglePayButtonComponent, GooglePayButtonModule } from '@google-pay/button-angular';
import { GpayComponent } from './gpay/gpay.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    CartPageComponent,
    FoodpageComponent,
    NotFoundComponent,
    SigninComponent,
    SignupComponent,
    CheckoutComponent,
    GpayComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GooglePayButtonModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function forRoot(arg0: {}): any[] | import("@angular/core").Type<any> {
  throw new Error('Function not implemented.');
}

