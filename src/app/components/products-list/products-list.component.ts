import { Component } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  products$!: Observable<Product[]>;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

}
