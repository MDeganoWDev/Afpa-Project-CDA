import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private http: HttpClient) {}
  searchTerm !: string;
  searchProducts(searchTerm: string) {
    // this.searchTerm=searchTerm;
    return this.http.get('https://world.openfoodfacts.org/products', { params: { q: searchTerm } });
}
}
