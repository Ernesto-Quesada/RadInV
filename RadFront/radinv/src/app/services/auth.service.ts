import { Injectable } from '@angular/core';
import { Http, Response , Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthService {

  BASE_URL = 'http://localhost:3000';
  constructor(private http: Http) { }

  register(user) {
    return this.http.post(this.BASE_URL + '/api/auth', user)
    .subscribe()
  }
}
