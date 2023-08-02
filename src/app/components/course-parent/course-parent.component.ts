import { Component, OnInit } from "@angular/core";
import { CourseService } from "src/app/services/course.service";
import { SessionService } from "src/app/services/session.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-course-parent",
  templateUrl: "./course-parent.component.html",
  styleUrls: ["./course-parent.component.css"],
})
export class CourseParentComponent implements OnInit {
  sessions:any=[];
  findedSessions:any=[];
  confTel: any;
  connectedUser: any;
  user: any;
  students: any = [];
  findedStudent: any = [];
  constructor(private userService: UserService, private sessionService :SessionService) {}

  ngOnInit() {
    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    console.log("id user conf tel", this.connectedUser.confTel);

    this.userService.getAllStudents().subscribe((res) => {
      this.students = res.students;
      console.log("all parents", this.students);
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].tel == this.connectedUser.confTel) {
          this.findedStudent.push(this.students[i]);

        }
        console.log(" finded student ", this.findedStudent);

      }
    });
    this.sessionService.getAllSessions().subscribe((res)=>{
      this.sessions=res.sessions;
      console.log("all sessions", this.sessions);

       for (let i = 0; i < this.sessions.length; i++) {
        if (this.sessions[i].idStudent == this.findedStudent[i]._id) {
          this.findedSessions.push(this.sessions[i]);

        }
        console.log(" finded session ", this.findedSessions);

      }
    });
   
  }
}
