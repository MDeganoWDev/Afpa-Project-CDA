import { Component, Input, OnInit } from '@angular/core';
import { SanteService } from '../service/sante.service';
import { Ingredient, Product } from '../models/product';

// import { Observable } from 'rxjs';

@Component({
  selector: 'app-sante',
  templateUrl: './sante.component.html',
  styleUrls: ['./sante.component.css']
})
export class SanteComponent implements OnInit {

  products!: Product;
  ingredients!: Ingredient[];
  //products$!: Observable<Product[]>;

  constructor(private santeService: SanteService) { }

  ngOnInit() {
    this.santeService.getData().subscribe((data: Product) => {
      this.products = data;
      console.log(this.products);
    });

  }
 
}

