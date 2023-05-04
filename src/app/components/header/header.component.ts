import { Component } from '@angular/core';
import { MoteurRechercheService } from 'src/app/services/moteur-recherche.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  chercheProduit!: string;

  constructor(private moteurRechercheService: MoteurRechercheService) {}

  chercher(){
    this.moteurRechercheService.setData(this.chercheProduit);
  }

}
