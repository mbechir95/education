import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-teacher',
  templateUrl: './search-teacher.component.html',
  styleUrls: ['./search-teacher.component.css']
})
export class SearchTeacherComponent implements OnInit {
  // searchForm: FormGroup;
  // obj:any={};
  // title="search teacher";
  // teachers:any;
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
    // this.userService.getAllTeachers().subscribe(
    //   (response)=> {
       
        
    //     this.teachers=response.teachers;
    //   }
    // );   
  }
  search() {
    // // console.log("here is",this.obj);
    // localStorage.setItem('teacherToFind',JSON.stringify (this.obj) );
 
    // this.router.navigate(['teachers/search']);
    
   }
}
