import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  constructor(private userService:UserService,private router: Router,) { }
  title="teachers";
  path: string;
  teachers:any=[];
  speciality:any;
  fName:any;
  lName:any;
  fTeacher:any=[];
  teacherToFind:any;
  ngOnInit() {
    this.userService.getAllTeachers().subscribe(
      (response)=> {
       
        
        this.teachers=response.teachers;
      }
    );   
     this.teacherToFind = JSON.parse(localStorage.getItem("teacherToFind"));
     console.log('here is teacherToFind', this.teacherToFind);
    
     for (let i = 0; i < this.teachers.length; i++) {
      
      if (
      //  this.teacherToFind.fName == this.teachers[i].firstName ||
         this.teacherToFind.speciality == this.teachers[i].speciality
       ) {
         this.fTeacher.push(this.teachers[i]);
       }
     }
      console.log('here finded teacher', this.fTeacher);
    
    //  this.path = this.router.url;
    //   if (this.path == "/teachers/search") {
    //     this.teachers = this.fTeacher;
    //   }
  }

}
