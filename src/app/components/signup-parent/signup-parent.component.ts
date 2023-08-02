import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-parent',
  templateUrl: './signup-parent.component.html',
  styleUrls: ['./signup-parent.component.css']
})
export class SignupParentComponent implements OnInit {
  title: string = "Signup Parent";
  signupParentForm :FormGroup ;
  errorMsg:any;
  msg:any;
  imagePreview: string;
  students:any;

  constructor( private x :FormBuilder, private userService: UserService,
    private router:Router) { }

  ngOnInit() {

    this.userService.getAllStudents().subscribe((response) => {
      this.students = response.students;
     
      
      
    });



    this.signupParentForm =this.x.group ({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern]],
     
      tel: ["", [Validators.required, Validators.pattern]],
      confTel: ["", [Validators.required, ]],

      adress: ["", [Validators.required, Validators.pattern]],
     
  })
  }
  signupParent() {
    this.signupParentForm.value.role ="parent";

    console.log("here your son's number", this.signupParentForm.value.confTel);

   this.userService.telVerification(this.signupParentForm.value).subscribe((response)=>{
    
    if (response.msg=="1") {
      this.userService.addParent(this.signupParentForm.value).subscribe(
        (response)=>{
         console.log("here response after signUp from BE",response.msg);
         if (response.msg) {
           console.log(" response",response.msg);
           }
          else{
             this.errorMsg="Error with signup";
          }
        }
       
    );
    } else {
      this.errorMsg="please verifie you son's number";
    }



   });






  //   console.log("here sign up parent clicked", this.signupParentForm.value);
    

  //       this.userService.addParent(this.signupParentForm.value).subscribe(

  //     (response)=>{
        
  //      console.log("here response after signUp from BE",response.msg);
  //   if (!response.msg) {
  // //         this.router.navigate(["login"]);
  //           this.errorMsg="Error with signup";
  //   }
  // // else{
  // //    this.errorMsg="Error with signup";
  // //   }
  //    }
  // );
    
  
}

}
