import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  getProduitById(produitId: number): Observable<object> {
    return this.http.get(`https://world.openfoodfacts.org/api/v2/product/${produitId}`, { observe: 'body' });
  }
}
