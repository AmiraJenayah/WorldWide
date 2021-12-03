import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {AppMainComponent} from './app.main.component';


@Component({
    selector: 'app-topbar',

 template: `
 <div class="layout-topbar">
     <div class="layout-topbar-wrapper">
         <div class="layout-topbar-left">
             <div class="layout-topbar-logo-wrapper">
                 <a href="#" class="layout-topbar-logo">
             
                 <span class="app-name">Decathone</span>
                 </a>
             </div>

             <a href="#" class="sidebar-menu-button" (click)="app.onMenuButtonClick($event)">
                 <i class="pi pi-bars"></i>
             </a>
         </div>
         <div class="layout-topbar-right fadeInDown">
         <ul class="layout-topbar-actions">
         <li #message class="topbar-item">
                     <a href="#" >
                         <i class="topbar-icon pi pi-sign-out"></i> 
                     </a>
         
                 </li>
         </ul>

         </div>
         
     </div>
 </div>
`

})
export class AppTopBarComponent {

    activeItem: number;

    constructor(public app: AppMainComponent,private router: Router) {}

    mobileMegaMenuItemClick(index) {
        this.app.megaMenuMobileClick = true;
        this.activeItem = this.activeItem === index ? null : index;
    }

  
}
