import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../model/product/product.model';

@Injectable()
export class ProductService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:9090/';
  }


  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }

  public saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:9090/product', product);
  }

  public getProduct(productId): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + 'product/' + productId);
  }
}
