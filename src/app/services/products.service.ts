import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>('https://dummyjson.com/products');
  }

  getProduct(id: number): Observable<Products> {
    return this.http.get<any>(`https://dummyjson.com/products/${id}`);
  }

  searchProducts(searchString: string): Observable<Products[]> {
    return this.http.get<Products[]>(
      `https://dummyjson.com/products/search?q=${searchString}`
    );
  }
}
