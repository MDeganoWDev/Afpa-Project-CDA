import { Component } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-quickcomponent',
  templateUrl: './quickcomponent.component.html',
  styleUrls: ['./quickcomponent.component.css']
})
export class QuickcomponentComponent {
  
     products : any[] | undefined;

    constructor(private produitService: ProduitService) { }
  
  
    ngOnInit() {
      this.produitService.getHomeData().subscribe(data => {
        console.log(data.products);
        this.products = data.products});
        
      }}
        
       
  
  
  


