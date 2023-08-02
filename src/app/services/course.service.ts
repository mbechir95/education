import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courseURl: string = "http://localhost:3000/courses";

  constructor(private httpClient: HttpClient) { }
  getAllCourses() {
    return this.httpClient.get<{ courses: any }>(this.courseURl);
  }
  addCourse(courseObj) {
    return this.httpClient.post<{ msg: string }>(this.courseURl, courseObj);
  }
   //response: boolean/string
   deleteCourseById(id) {
    return this.httpClient.delete<{ message: string }>(this.courseURl + "/" + id);
  }
  getCourseById(id) {
    return this.httpClient.get<{ course: any }>(this.courseURl + "/" + id);
  }
  editCourse(courseObj) {
    return this.httpClient.put<{ msg: string }>(this.courseURl, courseObj);
  }
  getCourseByIdTeacher(id) {
    return this.httpClient.get<{ course: any }>(this.courseURl + "/idTeacher/" + id);
  }
}
