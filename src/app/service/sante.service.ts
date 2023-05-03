import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SanteService {

  constructor(private http: HttpClient) { }


  getData(id : any): Observable<Product> {
    return this.http.get<Product>(`https://world.openfoodfacts.org/api/v0/product/6194019602400.json`);
  }

}

//  https://world.openfoodfacts.org/api/v0/product/6194019602400.json
//

// 737628064502
/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Product } from '../models/product';;

@Injectable({
  providedIn: 'root',
})
export class SanteService {

  constructor(private http: HttpClient) { }

   getData(): Observable<Product> {
    return this.http.get<Product>(https://world.openfoodfacts.org/api/v2/product/${produitId}, { observe: 'body' });
  }
}
*/