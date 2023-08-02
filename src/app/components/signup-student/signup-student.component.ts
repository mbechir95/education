import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-student',
  templateUrl: './signup-student.component.html',
  styleUrls: ['./signup-student.component.css']
})
export class SignupStudentComponent implements OnInit {
  title: string = "Signup Student";
  signupStudentForm :FormGroup ;
  errorMsg:any;
  msg:any;
  imagePreview: string;
  constructor(private x :FormBuilder, private userService: UserService,
    private router:Router) { }

  ngOnInit() {
    this.signupStudentForm =this.x.group ({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern]],
      confPassword: ["", [Validators.required, Validators.pattern]],
      tel: ["", [Validators.required, Validators.pattern]],
      adress: ["", [Validators.required, Validators.pattern]],
      img: [""],
  })
  }
  signupStudent() {
    this.signupStudentForm.value.role ="student";
    console.log("here sign up teacher clicked", this.signupStudentForm.value);
    this.userService.addUser(this.signupStudentForm.value,this.signupStudentForm.value.img).subscribe(
      (response)=>{
       console.log("here response after signUp from BE",response.msg);
   //     // if (response.msg) {
   //     //   // this.router.navigate(["login"]);
   //     // }
   //     // else{
   //     //   this.errorMsg="Error with signup";
   //     // }
     }
  );
}
onImageSelected(event: Event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.signupStudentForm.patchValue({ img: file });
  this.signupStudentForm.updateValueAndValidity();
     const reader = new FileReader();
 reader.onload = () => {
  this.imagePreview = reader.result as string
  };
  reader.readAsDataURL(file);
  }
}
