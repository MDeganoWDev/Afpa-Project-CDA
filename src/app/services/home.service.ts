import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class HomeService {

    constructor(private http: HttpClient) { 

    }

    private readonly Home_json = 'https://world.openfoodfacts.org?json=true';
    


    public getHomeData() :Observable <any>{
        return this.http.get(this.Home_json)
    }

  }

  // data.products.product_name)
  