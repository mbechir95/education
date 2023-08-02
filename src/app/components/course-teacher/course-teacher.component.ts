import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CourseService } from "src/app/services/course.service";

@Component({
  selector: "app-course-teacher",
  templateUrl: "./course-teacher.component.html",
  styleUrls: ["./course-teacher.component.css"],
})
export class CourseTeacherComponent implements OnInit {
  user: any;
  findedCourse: any=[];
  courses:any=[];
  constructor(private courseService: CourseService,
    private router :Router) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("connectedUser"));
    console.log("id user",this.user.id);
    this.courseService.getAllCourses().subscribe((res) => {
      this.courses = res.courses;
      console.log(" courses ", this.courses);

      for (let i = 0; i < this.courses.length; i++) {
        if (this.courses[i].idTeacher == this.user.id) {
          this.findedCourse.push(this.courses[i]);
          console.log("finded courses ", this.findedCourse);
        }
      }

    });
  }


  goToDisplay(x: string) {
    this.router.navigate([`course-info/${x}`]);
  }
  DeleteCourse(id) {
    this.courseService.deleteCourseById(id).subscribe((Response) => {
      console.log("is deleted ?", Response.message);
      this.courseService.getAllCourses().subscribe((response) => {
        this.courses = response.courses;
      });
    });
  }
  goToEdit(id){
    this.router.navigate([`edit-course/${id}`]);
      }

}
