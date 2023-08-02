import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-student-teacher',
  templateUrl: './student-teacher.component.html',
  styleUrls: ['./student-teacher.component.css']
})
export class StudentTeacherComponent implements OnInit {
  students:any;
  user:any;
  sessions:any=[];
  findedSession:any=[];
  constructor(private sessionService:SessionService, private router :Router, 
    private userService :UserService) { }
  
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("connectedUser"));
    console.log("id user id",this.user.id);

    this.sessionService.getAllSessions().subscribe((response) => {
      this.sessions = response.sessions;
      console.log("all sessions", this.sessions);
      for (let i = 0; i < this.sessions.length; i++) {
        if (this.sessions[i].idTeacher == this.user.id) {
          this.findedSession.push(this.sessions[i]);
          console.log("finded sessions ", this.findedSession);
        }
      }
    });
  


  }
  DeleteUser(id) {
    this.userService.deleteUserById(id).subscribe((Response) => {
      console.log("is deleted ?", Response.message);
      this.userService.getAllStudents().subscribe((response) => {
        this.students = response.students;
      });
    });
  }
  goToDisplay(x: string) {
    this.router.navigate([`user-info/${x}`]);
  }
}
