import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers, RequestMethod, Request} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    //===StorageKEy is just a string name paired with token value
  storageKey: string = 'contact-manager-jwt';
  token;
  BASE_URL = 'http://localhost:3000';

  constructor(private http: Http,
              private router: Router) { }
//   request(url: string, method: RequestMethod, body?: Object) {
//     const headers = new Headers();
//     headers.append('Content-type', 'application/json');

//     const requestOptions = new RequestOptions({
//       method: method,
//       url: `${this.BASE_URL}/${url}`,
//       headers: headers
//     });
//     if (body) {
//       requestOptions.body = body;
//     }
//     const request = new Request(requestOptions)

//     return this.http.request(request)
//     .toPromise

// }
// get(url) {
//   return this.request(url, RequestMethod.Get)
// }

          // +++
          // REGISTER NEW USERS
          // ++
  register(user) {
    // ==NO need to send confirmated password to API
    delete user.confirmPassword;
    return this.http.post(this.BASE_URL + '/api/auth', user)
    .subscribe();
  }
          // ++
          // LOGIN
          // ++
  login( payload ) {
    // console.log('Paylod received at login in authservice', payload);
    return this.http.post( this.BASE_URL + '/api/login', payload )
    .toPromise()
    .then((res) => res.json())
    // Improve this by redirecting from here to where I want
    // .subscribe( data => {
    //   this.setToken(data.token );
    //   this.router.navigate(['isotopes']);
    // });
  }

  setToken(token) {
    localStorage.setItem(this.storageKey, token);
  };
  getToken() {
    const header = new Headers({'Authorization': 'Bearer' + localStorage.getItem(this.storageKey)})
    return new RequestOptions({headers: header});
  }

  isLoggedIn() {
    return this.getToken() !== null;
  };
  logOut() {
    localStorage.removeItem(this.storageKey);
    this.router.navigate(['/login'])
  };
}
