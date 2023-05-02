import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SanteService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Product> {
<<<<<<< HEAD
    return this.http.get<Product>('https://world.openfoodfacts.org/api/v0/product/7622210449283.json');
=======
    return this.http.get<Product>('https://world.openfoodfacts.org/api/v0/product/3017620422003.json');
>>>>>>> 9acd48399a483c30902292c9159baf995e34f233
  }

}

//  https://world.openfoodfacts.org/api/v0/product/6194019602400.json
//

// 737628064502
/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  getProduitById(produitId: number): Observable<object> {
    return this.http.get(https://world.openfoodfacts.org/api/v2/product/${produitId}, { observe: 'body' });
  }
}
*/