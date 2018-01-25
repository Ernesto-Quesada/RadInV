import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers, RequestMethod, Request} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AuthService} from '../services/auth.service'



@Injectable()
export class IsotopesService {
BASE_URL = 'http://localhost:3000';


  constructor(private http: Http,
              private authService: AuthService ) {}


  getIsotopes() {
    return this.http.get(this.BASE_URL + '/api/isotopes', this.authService.tokenHeader)
    .map(res => res.json());
  }
  isotopeDetails(id) {
    return this.http.get(`${this.BASE_URL}/api/isotope/${id}`, this.authService.tokenHeader)
    .map(res => res.json());
  }
  editIsotope(isotope) {
     console.log('????????', isotope);
    return this.http.post(this.BASE_URL + '/api/isotope/edit',
                          isotope,
                          this.authService.tokenHeader)
    .toPromise()
      .then(res => res.json());

    }
    getReceived() {
      return this.http.get(this.BASE_URL + '/api/received', this.authService.tokenHeader)
      .map(res => res.json());
    }

    receivedIsotope(receivedIsotope) {
      console.log('receivedIsotope Service', receivedIsotope);
      return this.http.post(this.BASE_URL + '/api/received-edit',
                            receivedIsotope,
                            this.authService.tokenHeader)
    .toPromise()
      .then(res => res.json());
    }

}
