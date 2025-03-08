import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public service: ApiService) {
    this.getAllProducts()
  }
  public allProductsArr: any;
  getAllProducts() {
    this.service.getAllProducts().subscribe((el: any) => this.allProductsArr = el)
  }
  addInBasketProduct(product: any) {
    this.service.postInBasket(product).subscribe(el => el)
  }
}
