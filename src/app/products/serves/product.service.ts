import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  getAllProduct():Observable<any> {
    return this._http.get('https://fakestoreapi.com/products');
  }
  getAllCategory():Observable<any> {
    return this._http.get('https://fakestoreapi.com/products/categories');
  }
  getAllProductsByCategory(keyWord:any):Observable<any> {
    return this._http.get(`https://fakestoreapi.com/products/category/${keyWord}`);
  }
  getCartById(id:any):Observable<any> {
    return this._http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
