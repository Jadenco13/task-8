import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-cart',
  imports: [RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public service: ApiService) {
    this.getBasket()
  }
  public basket: any;
  getBasket() {
    this.service.getAllProductsFromBasket().subscribe(el => this.basket = el)
  }
  removeProduct(productId: number) {
    console.log(productId)
    this.service.removeProductFromBasket(productId).subscribe(el => {
      el
      this.getBasket()
    })
  }
}
