import { SessionService } from "src/app/services/session.service";
import { Component, OnInit } from "@angular/core";
import { CourseService } from "src/app/services/course.service";
import { UserService } from "src/app/services/user.service";
import { FormGroup } from "@angular/forms";
import { EvaluationService } from "src/app/services/evaluation.service";

@Component({
  selector: "app-evaluation-teacher",
  templateUrl: "./evaluation-teacher.component.html",
  styleUrls: ["./evaluation-teacher.component.css"],
})
export class EvaluationTeacherComponent implements OnInit {
  addEvaluationForm: FormGroup;
  title = "Evaluation";
  obj: any = {};
  sessions: any = [];
  connectedUser: any = [];
  userId: any;
  courseId: any;
  findedUser: any;
  findedCourse: any;
  findedSession: any = [];
  evaluation: any;
  idSession: any;
  msg: any;
  errorMsg: any;
  constructor(
    private userService: UserService,
    private courseService: CourseService,
    private evaluationService: EvaluationService,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    this.userId = this.connectedUser.id;

    this.sessionService.getAllSessions().subscribe((response) => {
      this.sessions = response.sessions;
      console.log("all sessions", this.sessions);
    });
    console.log("id user from ls", this.userId);
    this.userService.getUserById(this.userId).subscribe((response) => {
      this.findedUser = response.user;
    });
    this.courseService.getCourseByIdTeacher(this.userId).subscribe((response) => {
        this.findedCourse = response.course;
        console.log("finded course ", this.findedCourse);

        for (let i = 0; i < this.sessions.length; i++) {
          if (this.sessions[i].idCourse == this.findedCourse._id) {
            this.findedSession.push(this.sessions[i]);
            console.log("finded sessions ", this.findedSession);
          }
        }

        // this.sessionService.getSessionByIdCourse(this.findedCourse._id).subscribe((response) => {
        //   this.findedSession = response.session;
        //   console.log("finded session", this.findedSession);
        // });
      });
  }

  addEvaluation() {
    this.evaluation = {
      nameCourse: this.findedCourse.nameCourse,
      idCourse: this.findedCourse._id,
      durationCourse: this.findedCourse.durationCourse,
      firstNameTeacher: this.findedUser.firstName,
      lastNameTeacher: this.findedUser.lastName,
      idStudent: this.findedSession.idStudent,
      idTeacher: this.userId,
      eval: this.obj.evaluation,
      note: this.obj.note,
    };
    console.log("evaluation", this.evaluation);
    this.evaluationService.addEvaluation(this.evaluation).subscribe((res) => {
      console.log("here response after add Evaluation from BE", res.msg);
      if (res.msg) {
        // this.router.navigate(["login"]);
        console.log("here response after add Evaluation from BE", res.msg);
      } else {
        this.errorMsg = "Error with evaluation";
      }
    });
  
  }
}
