import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_URL } from "../env/env";
import { Product } from "../models/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${API_URL}`);
    }

    getProduct(id:number): Observable<Product> {
        return this.http.get<Product>(`${API_URL}/${id}`);
    }
}