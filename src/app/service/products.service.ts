import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly httpClient = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/products';

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }
}
