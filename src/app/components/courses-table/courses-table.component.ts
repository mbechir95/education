import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CourseService } from "src/app/services/course.service";

@Component({
  selector: "app-courses-table",
  templateUrl: "./courses-table.component.html",
  styleUrls: ["./courses-table.component.css"],
})
export class CoursesTableComponent implements OnInit {
  courses: any;
  courseId: any;
  findedCourse: any;
  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit() {
    this.courseService.getAllCourses().subscribe((response) => {
      this.courses = response.courses;
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
