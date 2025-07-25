import { Product } from "./product.model";

export class CartProduct {
  product!: Product;
  quantity!: number;
  totalPrice!: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
    this.totalPrice = product.price * quantity;
  }

  incrementQuantity() {
    this.quantity++;
    this.updateTotalPrice();
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateTotalPrice();
    }
  }

  private updateTotalPrice() {
    this.totalPrice = this.product.price * this.quantity;
  }
}