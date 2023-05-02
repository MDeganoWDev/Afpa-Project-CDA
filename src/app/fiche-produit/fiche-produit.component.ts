import { Component } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Produit } from '../model/produit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css'],
})
export class FicheProduitComponent {

  titleFicheProduit = 'Produit XXXX';
  produit!: Produit;

  constructor(private produitService: ProduitService, private route: ActivatedRoute,
    private title: Title, private router: Router) {
    this.title.setTitle(this.titleFicheProduit);
  }

  ngOnInit() {
    const produitId = this.route.snapshot.params['id'];
    console.log(produitId);

    this.produitService.getProduitById(produitId).subscribe({
      next: (data: any) => {
        console.log(data);
        if (data.status_verbose === 'product found') {

          const dataP = data.product;

          this.produit = new Produit(
            dataP._id, dataP.image_url, dataP.product_name, dataP.GeneriqueName, dataP.quantity,
            dataP.packaging, dataP.brands, dataP.categories, dataP.labels,
            dataP.ingredients_original_tags, dataP.code, dataP.link, dataP.stores, 
            dataP.countries,dataP.nutriscore_grade, dataP.nova_group,dataP.ecoscore_grade
          );
        } else {
          alert('Aucune description à afficher')
          this.router.navigateByUrl('');
        }
      },
      error: (error) => {
        console.error(error.error.status_verbose);
        alert('Aucune description à afficher')
        this.router.navigateByUrl('');
      }
    });
  }

  


  ngOnDestroy() {
    // this.SubscriptionProduit.unsubscribe() // l'Observable émet la réponse et complète immédiatement ;
  }

  showProduit() {
    console.log(this.produit, 'test');
  }
}
