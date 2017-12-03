import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers, RequestMethod, Request} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    //===StorageKEy is just a string name paired with token value
  storageKey: string = 'contact-manager-jwt';
  NAME_KEY= 'name';
  TOKEN_KEY= 'token';
  BASE_URL = 'http://localhost:3000';

  constructor(private http: Http,
              private router: Router) { }

// +++++++++++++++++++++++++++++++++++++++++
          // LOGIN
 // ++++++++++++++++++++++
  register(user) {
    // ==NO need to send confirmated password to API
    delete user.confirmPassword;
    return this.http.post(this.BASE_URL + '/api/auth', user)
    .subscribe();
  }

 // +++++++++++++++++++++++++++++++++++++++++
          // LOGIN
 // ++++++++++++++++++++++
  login( payload ) {
    // console.log('Paylod received at login in authservice', payload);
   this.http.post( this.BASE_URL + '/api/login', payload )
   .subscribe( res => {
    console.log(res);
    localStorage.setItem( this.storageKey, res.json().token)
   })
  }

  setToken(token) {
    localStorage.setItem(this.storageKey, token);
  };
  getToken() {
    return localStorage.getItem(this.storageKey)}

  isLoggedIn() {
    return this.getToken() !== null;
  };
  logOut() {
    localStorage.removeItem(this.storageKey);
    this.router.navigate(['/login'])
  };
}
