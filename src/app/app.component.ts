import { Component } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
import { ConnectionService } from 'ng-connection-service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [MessageService, ConfirmationService]

})

export class AppComponent {
    status = 'ONLINE';
  isConnected = true;
    public spinkit = Spinkit;

    constructor(private connectionService: ConnectionService,    private _router: Router,
      
      private messageService: MessageService,

        ) {
        this.connectionService.monitor().subscribe(isConnected => {
          this.isConnected = isConnected;
          if (this.isConnected) {
            this.status = "ONLINE";
          }
          else {
            this.status = "OFFLINE";
            this.messageService.add({ severity: 'warn', summary: 'Connexion Faible', life: 6000 });

            this._router.navigate(['/']);
          }
        })
      }
}
