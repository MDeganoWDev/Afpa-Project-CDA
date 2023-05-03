import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-quickcomponent',
  templateUrl: './quickcomponent.component.html',
  styleUrls: ['./quickcomponent.component.css']
})
export class QuickcomponentComponent {
  
     products : any[] | undefined;

    constructor(private homeService: HomeService) { }
  
  
    ngOnInit() {
      this.homeService.getHomeData().subscribe(data => {
        console.log(data.products);
        this.products = data.products});
        
      }}
        
       
  
  
  


