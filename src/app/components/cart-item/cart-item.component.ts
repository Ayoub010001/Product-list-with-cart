import { Component, Input } from '@angular/core';
import { CartProduct } from '../../models/cart-product.model';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-cart-item',
  standalone: false,
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  @Input() item!: CartProduct;

  constructor(private cartService:CartService) { }

  removeFromCart(name: string) {
    this.cartService.removeFromCart(name);
  }
}
