import { CourseService } from "src/app/services/course.service";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, RouteReuseStrategy, Router } from "@angular/router";

@Component({
  selector: "app-course-info",
  templateUrl: "./course-info.component.html",
  styleUrls: ["./course-info.component.css"],
})
export class CourseInfoComponent implements OnInit {
  @Input() C:any ;
  title: string = "Course info";
  courseId: any;
  findedCourse: any = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.paramMap.get("id");
    console.log('course id:' , this.courseId);
    
    this.courseService
      .getCourseById(this.courseId)
      .subscribe((response) => {
        this.findedCourse = response.course;
        console.log("findedCourse", this.findedCourse);
      });
  }
}
