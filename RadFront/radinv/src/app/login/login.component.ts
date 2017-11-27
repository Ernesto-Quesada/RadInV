import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { AuthService} from '../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any;
  //payload;
  error;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private routetheuser: Router) {
      this.form = fb.group({
      email:     ['', [Validators.required, this.emailValid()] ],
      password:  ['', Validators.required],
      })
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form.value);
    console.log(this.form.email,"emailaloane"),
    console.log(this.form.value.email,"emailaloane value")
     const payload = {
      // username
      email: this.form.value.email,
      // password
      password: this.form.value.password
    };
    console.log('payload', payload)
    
        this.authService.login(payload)
         .then((theTokencomingFromApi) => {
           this.authService.setToken(theTokencomingFromApi);
         // this.user = theUsercomingFromApi;
         this.error = null;
         this.routetheuser.navigate(['/isotopes']);
       console.log('TOKEN_KEY api', theTokencomingFromApi);
       })
       // console.log('LOGIN INFO FROM THE HTML FORM', this.loginInfo);
      //  .catch((err) => {
      //    const apiInfo = err.json();
      //          this.error = apiInfo.message;
      //  });
     }





  isValid(control) {
    return this.form.controls[control].invalid && this.form.controls[control].touched
  }
  emailValid() {
    return control => {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(control.value) ? null : {invalidEmail: true}
    }
  }

}
