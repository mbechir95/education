import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  title: string = "Course";
  constructor() { }
  @Input()C:any ;

  ngOnInit() {
  }

}
