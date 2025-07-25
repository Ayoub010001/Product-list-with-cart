import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  @Input() dessert!: Product;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    console.log(this.dessert);
  }
}
