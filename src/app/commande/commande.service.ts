import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";

import { environment } from "src/environments/environment";

import { LazyLoadEvent } from "primeng/api";


const optionRequete = {};
@Injectable({
  providedIn: "root",
})
export class CommandeService {
  constructor(private _http: HttpClient) {}

 
  getAllUS() {
    return this._http.get<any[]>(
      'assets/demo/data/products.json'
     
    );
  }

  getAllUK() {
    return this._http.get<any[]>(
      'assets/demo/data/products_Uk.json'
     
    );
  }
  getAllFr() {
    return this._http.get<any[]>(
      'assets/demo/data/productsFr.json'
     
    );
  }

  getAllPr() {
    return this._http.get<any[]>(
      'assets/demo/data/productsPor.json'
     
    );
  }
  getAllBr() {
    return this._http.get<any[]>(
      'assets/demo/data/productsPbr.json'
     
    );
  }



}
