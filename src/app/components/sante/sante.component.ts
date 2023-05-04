import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Product, ShowList } from 'src/app/models/product';
import { ProduitService} from 'src/app/service/sante.service';


@Component({
  selector: 'app-sante',
  templateUrl: './sante.component.html',
  styleUrls: ['./sante.component.css']
})
export class SanteComponent implements OnInit {

  products!: Product;

  constructor(private route: ActivatedRoute, private produitService:ProduitService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.produitService.getProduitById(id).subscribe((data: any) => {
      this.products = data;
      console.log(data);
    });
  }
  
  showList: ShowList = { div1: false, div2: false,div3:false,div4: false,div5: false,div6: false };
  toggleList(listName: string) {
    this.showList[listName] = !this.showList[listName];
  }
  
}