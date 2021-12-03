import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



import { EncoursComponent } from './commande/encours/encours.component';


let taches:any[]   = JSON.parse(localStorage.getItem("taches"));

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: EncoursComponent,

             
        
            }
            
        ], { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
    ngOnInit(): void {
        console.log(taches);
    }
    
}
