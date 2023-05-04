import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoteurRechercheService {

  private product = new BehaviorSubject<any>({});
  currentProduct = this.product.asObservable();


  constructor(private http: HttpClient) {}

  setData(product: any) {
    this.product.next(product);
  }

  recherche(produit: string) {
    return  this.http.get<any>(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${produit}&search_simple=1&action=process&json=1&page_size=20`);
  }

}
