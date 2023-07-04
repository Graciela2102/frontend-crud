import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   url:string ='http://localhost:8000'
  constructor(private http:HttpClient) { }

  listProducts(){
    return this.http.get<any>(this.url+`/api/products`);
  }
}
