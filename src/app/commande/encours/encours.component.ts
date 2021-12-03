import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import {
  ConfirmationService,
  LazyLoadEvent,
  MessageService,
} from "primeng/api";
import { Table } from "primeng/table";
import { appconstants } from "../../appconstants";

import { CommandeService } from "../commande.service";

import { NgxPermissionsService } from "ngx-permissions";
import { EMPTY } from "rxjs";
import { DatePipe } from "@angular/common";
import { isNgTemplate } from "@angular/compiler";
import { map } from "rxjs/operators";
//import { NgxSpinnerService } from "ngx-spinner";
import { Observable, forkJoin } from "rxjs";

@Component({
  selector: "app-encours",
  templateUrl: "./encours.component.html",
  styleUrls: ["./encours.component.css"],
  providers: [MessageService, ConfirmationService, DatePipe],
})
export class EncoursComponent implements OnInit {

  commandes: any[] = [];
number : number ;

  totalRecords: number;

  langue = appconstants.LangandCul;
  //userId: Agent = JSON.parse(localStorage.getItem("id"));
  selectedName: string;
  constructor(

    private commandeService: CommandeService,

    public datepipe: DatePipe //  private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.number = 0;
    this.selectedName = this.langue[0].name;
      this.commandeService.getAllUS().subscribe((res) => {
        this.commandes = res['data'];
      });
  
  }

  onChange(e) {
   

    switch (e.name) {
      case 'En UK': {
        this.number = 1;
        this.commandeService.getAllUK().subscribe((res) => {
          this.commandes = res['data'];
        });
        

        break;
      }
      case 'En US': {
        this.number = 0;
        this.commandeService.getAllUS().subscribe((res) => {
          this.commandes = res['data'];
        });
        
        break;
      }
      case 'Fr': {
        this.number = 2;
      
        this.commandeService.getAllFr().subscribe((res) => {
          this.commandes = res['data'];
        });
      
        break;


      }
      case 'Pr': {
        this.number = 3;
        this.commandeService.getAllPr().subscribe((res) => {
          this.commandes = res['data'];
        });
      

        break;
      }
      case 'Pr Br': {
        this.number = 4;
        this.commandeService.getAllBr().subscribe((res) => {
          this.commandes = res['data'];
        });        
        break;
      }

    }

  }




}
