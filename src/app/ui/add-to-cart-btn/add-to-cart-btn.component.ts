import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-add-to-cart-btn',
  standalone: false,
  templateUrl: './add-to-cart-btn.component.html',
  styleUrl: './add-to-cart-btn.component.scss',
})
export class AddToCartBtnComponent {
  @Input() product!: Product;
  isAddedToCart!: boolean;

  constructor(private cartService: CartService){}

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
