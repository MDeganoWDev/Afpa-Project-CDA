import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  constructor(private http: HttpClient) {}

  getHomeData(): Observable<any> {
    return this.http.get('https://world.openfoodfacts.org?json=true');
  }

  getProduitByName(produit: string): Observable<object> {
    return  this.http.get(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${produit}&search_simple=1&action=process&json=1&page_size=20`);
  }

  getProduitById(produitId: string): Observable<object> {
    return this.http.get(
      `https://world.openfoodfacts.org/api/v2/product/${produitId}`,
      { observe: 'body' }
    );
  }
<<<<<<< HEAD


=======
>>>>>>> 6c56b5ad1025780033cb1bba8478d3e0c718e48a
}
