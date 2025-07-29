import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartProduct } from '../../models/cart-product.model';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-products-cart',
  standalone: false,
  templateUrl: './products-cart.component.html',
  styleUrl: './products-cart.component.scss'
})
export class ProductsCartComponent {
  myCart$!:Observable<CartProduct[]>;
  totalPrice: number = 0;
  totalElements: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.myCart$ = this.cartService.myCart$;
    this.calculateTotalPrice();
    this.calculateTotalElements();
  }

  calculateTotalPrice(){
    this.myCart$.subscribe(cartProducts => {
      this.totalPrice = cartProducts.reduce((total, product) => total + (product.product.price * product.quantity), 0);
    });
  }

  calculateTotalElements() {
    this.myCart$.subscribe(cartProducts => {
      this.totalElements = cartProducts.reduce((total, product) => total + product.quantity, 0);
    });
  }

}
