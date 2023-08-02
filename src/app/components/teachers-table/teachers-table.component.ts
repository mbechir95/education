import { NgIf } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-teachers-table",
  templateUrl: "./teachers-table.component.html",
  styleUrls: ["./teachers-table.component.css"],
})
export class TeachersTableComponent implements OnInit {
  status:any;
  users: any=[];
  showButton: boolean ;
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
   
    this.userService.getAllTeachers().subscribe((response) => {
      this.users = response.teachers;
     this.status=response.teachers.status;
    
      
    });
this.status=this.users.status;
console.log("status",this.status);
    
  }
  DeleteUser(id) {
    this.userService.deleteUserById(id).subscribe((Response) => {
      console.log("is deleted ?", Response.message);
      this.userService.getAllTeachers().subscribe((response) => {
        this.users = response.teachers;
      });
    });
  }
  goToDisplay(x: string) {
    this.router.navigate([`user-info/${x}`]);
  }
  verifieTeacher(id) {
    this.userService.validateUser(id).subscribe((response) => {
      console.log("obj is activated ?", response.updated);
      this.userService.getAllTeachers().subscribe((response) => {
        this.users = response.teachers;
      });
    });
  };
  // checkCondition() {
  //   // Example: Show the button if a certain variable is true
  //   this.showButton = (someVariable === true);
  // }  
}
