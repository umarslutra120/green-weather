import { Component, Sanitizer } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { __assign } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'green-weather';
  constructor(private matIconRegistery:MatIconRegistry,private domSanitizer:DomSanitizer){
    
    this.matIconRegistery
    .addSvgIcon('flowers',this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/flowers.svg'))
    .addSvgIcon('home',this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/home.svg'))
    .addSvgIcon('calender',this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/calendar.svg'))
    .addSvgIcon('farmer(1)',this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/farmer (1).svg'))
    .addSvgIcon('indoor-plants',this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/indoor-plants.svg'))
    .addSvgIcon('plant',this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/plant.svg'))
    .addSvgIcon('shipping(1)',this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/shipping(1).svg'))
    .addSvgIcon('ic',this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/ic.svg'))
    .addSvgIcon('3490',this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/Group 3490.svg'))
    .addSvgIcon('ic-assign',this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/ic_assignment_24px.svg'))
    .addSvgIcon('3226',this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/Group 3226.svg'))
    .addSvgIcon('phone',this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/ic_phonelink_setup_24px.svg'))
    .addSvgIcon('search',this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/ic_search_24px.svg'))


  }
}
