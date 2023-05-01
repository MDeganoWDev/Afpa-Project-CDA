import { Component, Input, OnInit } from '@angular/core';
import { SanteService } from '../service/sante.service';
import {  Product } from '../models/product';



@Component({
  selector: 'app-sante',
  templateUrl: './sante.component.html',
  styleUrls: ['./sante.component.css']
})
export class SanteComponent implements OnInit {

  products!: Product;
  // ingredients!: Ingredient[];
 

  constructor(private santeService: SanteService) { }

  ngOnInit() {
    this.santeService.getData().subscribe((data: Product) => {
      this.products = data;
      console.log(this.products);
    });

  }
 
}

