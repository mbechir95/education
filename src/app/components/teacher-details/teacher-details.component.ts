import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {

  constructor(private router:Router, private userService : UserService)  { }
  user:any;
  @Input() H:any ;

  ngOnInit() {
    this.userService.getAllTeachers().subscribe(
      (response)=> {
       
        
        this.user=response.teachers;
      }
    );   
  }
  goToDisplay(x: string) {
    this.router.navigate([`teacher-info/${x}`]);
  }
}
