import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { environment } from '../environments/environment';





@Injectable()
export class SearchUserService {
  BASE_URL = 'http://localhost:3000'
  constructor( private http: Http) { }
  search(term): Observable<any[]> {
    return this.http
               .get(this.BASE_URL + `/api/user/?name=${term}`)
               .map(response => response.json() );

}
}
