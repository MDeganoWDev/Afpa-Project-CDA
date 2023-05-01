import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient, Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SanteService {


    private ingredients: Ingredient[] = [];

  constructor(private http: HttpClient) { }

  getData(): Observable<Product> {
    return this.http.get<Product>('https://world.openfoodfacts.org/api/v0/product/3274080005003 .json');
  }

}

//  https://world.openfoodfacts.org/api/v0/product/04963406.json
//

// 737628064502