import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { Product } from '../../models/product.model';
import { CartProduct } from '../../models/cart-product.model';

@Component({
  selector: 'app-add-to-cart-btn',
  standalone: false,
  templateUrl: './add-to-cart-btn.component.html',
  styleUrl: './add-to-cart-btn.component.scss',
})
export class AddToCartBtnComponent implements OnInit{
  @Input() product!: Product;
  isAddedToCart!: boolean;
  myCartProducts!: CartProduct | undefined;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.isAddedToCart = false;
    this.myCartProducts = this.cartService.getMyCart().find(element => element.product.name === this.product.name);
  }

  addToCart() {
    this.isAddedToCart = true;
    // Logic to add the product to the cart
  }

  incrementQuantity() {
    this.cartService.incrementQuantity(this.product)
  }
  decrementQuantity() {
    this.cartService.decrementQuantity(this.product)
  }
}
