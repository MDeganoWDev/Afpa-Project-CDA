import { Component, Input, OnInit } from '@angular/core';
import { SanteService } from '../service/sante.service';
import {  ShowList,Product } from '../models/product';



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
<<<<<<< HEAD
  showList: ShowList = { div1: false, div2: false,div3:false,div4: false,div5: false,div6: false };
=======
  showList: ShowList = { div1: false, div2: false,div3:false,div4: false,div5: false };
>>>>>>> 9acd48399a483c30902292c9159baf995e34f233

  toggleList(listName: string) {
    this.showList[listName] = !this.showList[listName];
  }
  
  
 
}

