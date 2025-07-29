import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  @Input() dessert!: Product;
  isAddedToCart!: boolean;
  constructor(private productService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.isAddedToCart$(this.dessert.name).subscribe(isAdded => {
      this.isAddedToCart = isAdded;
    });
  }
}
