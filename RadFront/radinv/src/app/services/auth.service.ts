import { Injectable } from '@angular/core';
import { Http, Response , Headers} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthService {
  storageKey: string = 'contact-manager-jwt';
  token;
  BASE_URL = 'http://localhost:3000';
  constructor(private http: Http,
              private router: Router) { }

  register(user) {
    delete user.confirmPassword;
    return this.http.post(this.BASE_URL + '/api/auth', user)
    .subscribe();
  }
  login( payload ) {
    return this.http.post( this.BASE_URL + '/api/login', payload )
    .toPromise()
    .then((res) => res.json());
    // .subscribe( data => {
    //   this.setToken(data.token );
    //   this.router.navigate(['isotopes']);
    // });
  }

  setToken(token: string) {
    localStorage.setItem(this.storageKey, token);
  };
  getToken() {
    return localStorage.getItem(this.storageKey);
  };
  isLoggedIn() {
    return this.getToken() !== null;
  };
  logOut() {
    localStorage.removeItem(this.storageKey);
    this.router.navigate(['/login'])
  };
}
