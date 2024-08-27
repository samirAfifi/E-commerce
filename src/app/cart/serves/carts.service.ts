import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private _http: HttpClient) { }
  getNewCart(model:any):Observable<any> {
    return this._http.post('https://fakestoreapi.com/carts',model)
  }
}
