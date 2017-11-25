import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { AuthService} from '../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form;
  constructor(private fb: FormBuilder,
              private auth: AuthService) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, this.emailValid()]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.matchingFields('password', 'confirmPassword')}
  )
   }
   ngOnInit() {
   }
  onSubmit() {
    console.log(this.form.value)
   this.auth.register(this.form.value);
    
  }
  isValid(control) {
    return this.form.controls[control].invalid && this.form.controls[control].touched
  }
  matchingFields(field1, field2) {
    return form => {
      if (form.controls[field1].value !== form.controls[field2].value) {
        return {mismatchedFields: true}
      }
    }
  }
  emailValid() {
    return control => {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(control.value) ? null : {invalidEmail: true}
    }
  }
}
