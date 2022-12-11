import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup = this.formBuilder.group({})

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', {validators: [Validators.required, Validators.email]}],
      password: ['', {validators: [Validators.required]}],
    })
  }

  getEmailErrorMessage(){
    var field = this.form.get('email')
    if(field?.hasError('required') && field?.touched) {
      return '- Field Email is required'
    }

    if(field?.hasError('email') && field?.touched) {
      return '- Field Email is not valid'
    }

    return ''
  }

  getPasswordErrorMessage() {
    var field = this.form.get('password')

    if(field?.hasError('required') && field?.touched) {
      return '- Field password is required'
    }

    return ''
  }

  login() {

  }

}
