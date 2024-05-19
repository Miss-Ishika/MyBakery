import { Component } from '@angular/core';

@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.component.html',
  styleUrl: './gpay.component.css'
})
export class GpayComponent {
  title = 'AngularGooglePay';
  buttonColor = "black";
  buttonType = "buy";
  isCustomSize = 250;
  buttonHeight = 50;
  isTop = window ===window.top;

  paymentRequest = {
    apiVersion:2,
    apiVersionMinor:0,
    allowedPaymentMethods:[
      { type:"CARD",
      parameters:{
        allowedAuthMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],
        allowedCardNetworks:["AMEX","VISA","MASTERCARD"]
      },
      tokenizationSpecification:{
        type:"PAYMENT_GATEWAY",
        parameters:{
          gateway:"example",
          gatewayMerchant:"exampleGatewayMerchantId"

        }
      }
      }
    ],
    merchantInfo:{
      merchantId:"12345678901234567890",
      merchantName:"demo Merchant"
    },
    transactionInfo:{
      totalPriceStatus:"FINAL",
      totalPriceLabel:"Total",
      totalPrice:"100.00",
      currencyCode:"USD",
      countryCode:"US"
    }
  };
  onLoadPaymentData(event:any): void{
    console.log("Load Payment Data by Me", event.deatil)
  }
}
