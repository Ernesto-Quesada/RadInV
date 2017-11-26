import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { AuthService} from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any;
  constructor(private fb: FormBuilder,
    private authService: AuthService) {
      this.form = fb.group({
      email:     ['', [Validators.required, this.emailValid()] ],
      password:  ['', Validators.required],
      })
    }

  ngOnInit() {
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
