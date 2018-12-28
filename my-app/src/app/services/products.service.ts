import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ProductsService {
  constructor(private http: Http) { }
  getProductList() {
    return this.http.get('http://10.80.6.160:2000/').pipe(map((res)=>res.json()));
  }
}
