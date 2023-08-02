import { FormGroup } from "@angular/forms";

import { CourseService } from "./../../services/course.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-add-course",
  templateUrl: "./add-course.component.html",
  styleUrls: ["./add-course.component.css"],
})
export class AddCourseComponent implements OnInit {
  obj: any = {};
  addCourseForm: FormGroup;
  title: string = "Add Course";
  user: any;
  idTeacher: any;
  courseId: any;
  findedCourse: any;
  errorMsg:any;
  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.courseId) {
      this.title = "Edit Course";
      this.courseService.getCourseById(this.courseId).subscribe((response) => {
        this.obj = response.course;
      });
    }
  }
  addCourse() {
     if (this.courseId) {
       this.courseService.editCourse(this.obj).subscribe((response) => {
        console.log("here response after add Course from BE", response.msg);
      });
     } else {
      this.user = JSON.parse(localStorage.getItem("connectedUser"));

      this.obj.idTeacher = this.user.id;
      this.obj.fNameTeacher = this.user.fName;
      this.obj.lNameTeacher = this.user.lName;

      console.log("here is course", this.obj);
      this.courseService.addCourse(this.obj).subscribe((res) => {
        console.log("here response after add Course from BE", res.msg);
             if (res.msg) {
               // this.router.navigate(["login"]);
               console.log("here response after add Course from BE", res.msg);

             }
             else{
               this.errorMsg="Error with signup";
             }
      });
    }
  }
 }
