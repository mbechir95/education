import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CourseService } from "src/app/services/course.service";
import { UserService } from "src/app/services/user.service";
import { SessionService } from "src/app/services/session.service";

@Component({
  selector: "app-affectation-table",
  templateUrl: "./affectation-table.component.html",
  styleUrls: ["./affectation-table.component.css"],
})
export class AffectationTableComponent implements OnInit {
  addSessionForm: FormGroup;
  // findedCourse: any;
  // findedUser: any;
  courses: any;
  users: any;
  session: any;

  findedUser: any = [];
  findedCourse: any = [];
  msg: any;
  errorMsg: any;
  obj: any = {};

  constructor(
    private courseService: CourseService,
    private userService: UserService,
    private sessionService: SessionService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.courseService.getAllCourses().subscribe((response) => {
      this.courses = response.courses;
    });
    this.userService.getAllStudents().subscribe((response) => {
      this.users = response.students;
    });
    // this.courseId = this.activatedRoute.snapshot.paramMap.get("id");
  }
  addSession() {
    let idStudent = this.obj.idStudent;
    let idCourse = this.obj.idCourse;
  
    // console.log("resultat", this.obj);
  
    this.userService.getUserById(idStudent).subscribe((response) => {
      this.findedUser = response.user;
      // console.log("finded teacher", this.findedUser);
    });
    this.courseService.getCourseById(idCourse).subscribe((res) => {
      this.findedCourse = res.course;
      // console.log("finded course", this.findedCourse);
  
      this.session = {
        nameCourse: this.findedCourse.nameCourse,
        idTeacher:this.findedCourse.idTeacher,
        idCourse: this.findedCourse._id,
        durationCourse: this.findedCourse.durationCourse,
        firstNameTeacher: this.findedCourse.fNameTeacher,
        lastNameTeacher: this.findedCourse.lNameTeacher,
        idStudent: this.findedUser._id,
        fNameStudent: this.findedUser.firstName,
        lNameStudent: this.findedUser.lastName,
      };
      console.log("session", this.session);
  
      this.sessionService.idVerification(this.session).subscribe((response) => {
        console.log(res);
        // if (response.msg === "1") {
        //   this.errorMsg = "this student is already added";
        // } else if (response.msg === "0") {
        //   console.log(" response", response.msg);
        //   this.msg = response.msg;
          this.sessionService.addSession(this.session).subscribe((res) => {
            console.log(
              "here response after verifying id student from session bd",
              res.msg
            );
            // The session has been successfully added.
            // You can perform any additional actions here.
          });
        }
      // }
      );
    });
  }
  
}
