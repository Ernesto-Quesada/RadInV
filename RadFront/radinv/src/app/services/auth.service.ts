import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers, RequestMethod, Request} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    // ===StorageKEy is just a string name paired with token value
  NAME_KEY = 'name';
  TOKEN_KEY = 'token'
  token;
  BASE_URL = 'http://localhost:3000';

  constructor(private http: Http,
              private router: Router) { }

          // +++
          // REGISTER NEW USERS
          // ++
  register(user) {
    // ==NO need to send confirmated password to API
    delete user.confirmPassword;
    return this.http.post(this.BASE_URL + '/api/auth', user)
    .subscribe();
  }

  login( payload ) {
    // console.log('Paylod received at login in authservice', payload);
   this.http.post( this.BASE_URL + '/api/login', payload )
   .subscribe( res => {
     this.setToken(res);
   })
  }

  setToken(res) {
    localStorage.setItem( this.NAME_KEY, res.json().firstName);
    localStorage.setItem( this.TOKEN_KEY, res.json().token)
  };
  get tokenHeader() {
    const header = new Headers({'Authorization': 'Bearer  ' + localStorage.getItem( this.TOKEN_KEY ) });
    console.log (header);
    return new RequestOptions({headers: header});
  }

  // isLoggedIn() {
  //   return this.getToken() !== null;
  // };
  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login'])
  };
}
