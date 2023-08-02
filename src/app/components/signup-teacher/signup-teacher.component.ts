import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-teacher',
  templateUrl: './signup-teacher.component.html',
  styleUrls: ['./signup-teacher.component.css']
})
export class SignupTeacherComponent implements OnInit {
  title: string = "Signup Teacher";
  signupTeacherForm :FormGroup ;
  errorMsg:any;
  msg:any;
  imagePreview: string;

  constructor(private x :FormBuilder,
      private userService: UserService,
    private router:Router) { }

  ngOnInit() {
    this.signupTeacherForm =this.x.group ({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern]],
      confPassword: ["", [Validators.required, Validators.pattern]],
      tel: ["", [Validators.required, Validators.pattern]],
      speciality: ["", [Validators.required, Validators.pattern]],
      adress: ["", [Validators.required, Validators.pattern]],
      img: [""],

  })
  }
  signupTeacher() {
    this.signupTeacherForm.value.role ="teacher";
    this.signupTeacherForm.value.status ="notOk";
    console.log("here sign up teacher clicked", this.signupTeacherForm.value);
     this.userService.addUser(this.signupTeacherForm.value,this.signupTeacherForm.value.img).subscribe(
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
   this.signupTeacherForm.patchValue({ img: file });
   this.signupTeacherForm.updateValueAndValidity();
      const reader = new FileReader();
  reader.onload = () => {
   this.imagePreview = reader.result as string
   };
   reader.readAsDataURL(file);
   }
}