import { Component} from '@angular/core';
import { ActivatedRoute,} from '@angular/router';

import { ProduitService } from 'src/app/services/produit.service';
import { Product, ShowList } from 'src/app/models/product';


@Component({
  selector: 'app-sante',
  templateUrl: './sante.component.html',
  styleUrls: ['./sante.component.css']
})
export class SanteComponent {

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