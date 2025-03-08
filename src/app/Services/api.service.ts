import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}
  public loader = new BehaviorSubject<boolean>(false);
  getAllProducts() {
    return this.http.get(
      'https://restaurant.stepprojects.ge/api/Products/GetAll'
    );
  }
  postInBasket(product: any) {
    return this.http.post(
      'https://restaurant.stepprojects.ge/api/Baskets/AddToBasket',
      {
        quantity: 1,
        price: product.price,
        productId: product.id,
      }
    );
  }
  getAllProductsFromBasket() {
    return this.http.get(
      'https://restaurant.stepprojects.ge/api/Baskets/GetAll'
    );
  }
  removeProductFromBasket(productId: number) {
    return this.http.delete(
      `https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${productId}`
    );
  }

  startLoader() {
    this.loader.next(true);
  }
  stopLoader() {
    this.loader.next(false);
  }
}
