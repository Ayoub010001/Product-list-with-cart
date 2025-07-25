import { Injectable, OnInit } from "@angular/core";
import { CartProduct } from "../models/cart-product.model";
import { Product } from "../models/product.model";

@Injectable({
    providedIn: 'root'
})
export class CartService implements OnInit {  
    private myCart!: CartProduct[];

    constructor(){}

    ngOnInit() {
        this.myCart = [];
    }

    addToCart(product:Product): void {
        this.myCart.push(new CartProduct(product, 1));
    }

    incrementQuantity(product: Product):void{
        const productInCart = this.myCart.find(cartProduct => cartProduct.product.name === product.name);
        if (productInCart) {
            productInCart.incrementQuantity();
        }
    }
    decrementQuantity(product: Product):void{
        const productInCart = this.myCart.find(cartProduct => cartProduct.product.name === product.name);
        
        if (productInCart && productInCart.quantity > 1) {
            productInCart.decrementQuantity();
        }
    }

}