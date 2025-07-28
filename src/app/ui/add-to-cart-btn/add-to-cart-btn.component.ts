import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { Product } from '../../models/product.model';
import { CartProduct } from '../../models/cart-product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-to-cart-btn',
  standalone: false,
  templateUrl: './add-to-cart-btn.component.html',
  styleUrl: './add-to-cart-btn.component.scss',
})
export class AddToCartBtnComponent implements OnInit{

  @Input() product!: Product;
  ProductCart!: CartProduct;
  isAddedToCart!: boolean;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.isAddedToCart = false;
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.isAddedToCart = true;

    this.cartService.myCart$.subscribe(cartProducts => {
      const foundProduct = cartProducts?.find(cp => cp.product.name === this.product.name);
      if (foundProduct) {
          this.ProductCart = foundProduct;  
      }
    });
  }

  increaseQuantity(){
    this.cartService.incrementQuantity(this.product);
  }

  decreaseQuantity() {
    this.cartService.decrementQuantity(this.product);
  }

}
