import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-course-student',
  templateUrl: './course-student.component.html',
  styleUrls: ['./course-student.component.css']
})
export class CourseStudentComponent implements OnInit {
  user:any;
  sessions:any=[];
  findedSession:any=[]
  constructor(private router:Router, private sessionService :SessionService ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("connectedUser"));
    console.log("id user",this.user.id);
    this.sessionService.getAllSessions().subscribe((response) => {
      this.sessions = response.sessions;
      console.log("all sessions", this.sessions);
      for (let i = 0; i < this.sessions.length; i++) {
        if (this.sessions[i].idStudent == this.user.id) {
          this.findedSession.push(this.sessions[i]);
          console.log("finded sessions ", this.findedSession);
        }
      }
    });
 
  }
  goToDisplay(x: string) {
    this.router.navigate([`course-info/${x}`]);
  }
}
