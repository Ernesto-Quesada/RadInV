import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers, RequestMethod, Request} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class IsotopesService {
BASE_URL = 'http://localhost:3000';


  constructor(private http: Http) {}


  getIsotopes() {
    return this.http.get(this.BASE_URL + '/api/isotopes')
    .toPromise()
    .then(res => res.json());
  }
  isotopeDetails(id) {
    return this.http.get(`${this.BASE_URL}/api/isotope/${id}`)
    .toPromise()
    .then(res => res.json());
  }

}
