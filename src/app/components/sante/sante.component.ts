import { Component, Input, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Product, ShowList } from 'src/app/models/product';
import { SanteService } from 'src/app/service/sante.service';


@Component({
  selector: 'app-sante',
  templateUrl: './sante.component.html',
  styleUrls: ['./sante.component.css']
})
export class SanteComponent implements OnInit {

  products!: Product;

  constructor(private santeService: SanteService,private route: ActivatedRoute) { }


  

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('code');
    console.log(this.route);
    this.santeService.getData(id).subscribe((data: Product) => {
      this.products = data;
      console.log(this.products);
    });

  }
  showList: ShowList = { div1: false, div2: false,div3:false,div4: false,div5: false,div6: false };

  toggleList(listName: string) {
    this.showList[listName] = !this.showList[listName];
  }
  
  
 
}

