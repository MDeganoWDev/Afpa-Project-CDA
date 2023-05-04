import { Component, OnInit } from '@angular/core';

import { MoteurRechercheService } from 'src/app/services/moteur-recherche.service';

@Component({
  selector: 'app-list-recherche',
  templateUrl: './list-recherche.component.html',
  styleUrls: ['./list-recherche.component.css']
})
export class ListRechercheComponent implements OnInit{

  inputRecherche: string | null = null;
  data!: any;
  
  constructor(
    private moteurRechercheService: MoteurRechercheService) {}


  ngOnInit(): void {
    this.moteurRechercheService.currentProduct.subscribe(product => {
        this.inputRecherche = product;
        if (this.inputRecherche !== null) {
          this.moteurRechercheService.recherche(this.inputRecherche).subscribe(response => {
            this.data = response.products;
          });
        }
      });
  }


}
