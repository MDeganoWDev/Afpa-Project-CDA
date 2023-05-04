import { Component } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  chercheProduit!: string;

  constructor(private produitService: ProduitService) {}

  chercher(){
    this.produitService.setData(this.chercheProduit);
  }

}
