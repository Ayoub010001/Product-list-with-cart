import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { CartProduct } from "../models/cart-product.model";
import { Product } from "../models/product.model";


@Injectable({
    providedIn: 'root'
})
export class CartService{
    
    private myCart = new BehaviorSubject<CartProduct[]>([]);
    
    get myCart$() {
        return this.myCart.asObservable();
    }

    addToCart(product:Product){
        const newCartProduct = new CartProduct(product, 1);
        const currentCart = [...this.myCart.getValue(), newCartProduct];
        this.myCart.next(currentCart);
    }
    
    incrementQuantity(product:Product){
        const currentCart = this.myCart.getValue();
        const cartProduct = currentCart.find(cp => cp.product.name === product.name);
        
        if(!cartProduct){
            return;
        }
        const updatedCart = currentCart.map(cp =>{
            if(cp.product.name === product.name){
                cp.incrementQuantity();
            }
            return cp;
        })
        this.myCart.next(updatedCart);
    }
    
    decrementQuantity(product: Product) {
        const currentCart = this.myCart.getValue();
        const cartProduct = currentCart.find(cp => cp.product.name === product.name);
        
        if(!cartProduct){
            return;
        }
        const updatedCart = currentCart.map(cp =>{
            if(cp.product.name === product.name){
                cp.decrementQuantity();
            }
            return cp;
        })
        this.myCart.next(updatedCart);
    }

    removeFromCart(name:string){
        const currentCart = this.myCart.getValue();
        const updatedCart = currentCart.filter(cp => cp.product.name !== name);
        this.myCart.next(updatedCart);
    }

    isAddedToCart$(name: string): Observable<boolean> {
        return this.myCart$.pipe(
          map(cartProducts => cartProducts.some(cp => cp.product.name === name))
        );
    }
}