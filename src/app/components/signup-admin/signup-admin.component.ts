import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit {
  title: string = "Signup Admin";
  signupAdminForm :FormGroup ;

  constructor(private x :FormBuilder) { }

  ngOnInit() {
    this.signupAdminForm =this.x.group ({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern]],
      confPassword: ["", [Validators.required, Validators.pattern]],
      tel: ["", [Validators.required, Validators.pattern]],
      adress: ["", [Validators.required, Validators.pattern]],
  })
  }
  signupAdmin() {
    this.signupAdminForm.value.role ="admin";
    console.log("here sign up teacher clicked", this.signupAdminForm.value);
}
}
