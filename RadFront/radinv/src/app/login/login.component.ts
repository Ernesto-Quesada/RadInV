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
    // console.log(this.form.value);
    // console.log(this.form.value.email, 'value_dot_email')
    const payload = {
      email: this.form.value.email,
      password: this.form.value.password
    };
    // console.log('payload', payload)
    this.authService.login(payload)
        .then((theTokencomingFromApi) => {
          // console.log('TOKEN_KEY from API before setToken is called', theTokencomingFromApi);
          this.authService.setToken(theTokencomingFromApi.token );
          this.error = null;
          this.routetheuser.navigate(['/isotopes']);
          // console.log('TOKEN_KEY api', theTokencomingFromApi);
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
