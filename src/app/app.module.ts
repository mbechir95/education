import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupTeacherComponent } from './components/signup-teacher/signup-teacher.component';
import { SignupStudentComponent } from './components/signup-student/signup-student.component';
import { SignupParentComponent } from './components/signup-parent/signup-parent.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { BlogComponent } from './components/blog/blog.component';
import { ClassesComponent } from './components/classes/classes.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { AboutComponent } from './components/about/about.component';
import { BookingComponent } from './components/booking/booking.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { TeachersTableComponent } from './components/teachers-table/teachers-table.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { ParentsTableComponent } from './components/parents-table/parents-table.component';
import { SearchTeacherComponent } from './components/search-teacher/search-teacher.component';
import { FilterPipe } from './pipes/filter.pipe';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { AffectationTableComponent } from './components/affectation-table/affectation-table.component';
import { EvaluationTeacherComponent } from './components/evaluation-teacher/evaluation-teacher.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { ParentDashboardComponent } from './components/parent-dashboard/parent-dashboard.component';
import { SessionsTableComponent } from './components/sessions-table/sessions-table.component';
import { TeacherInfoComponent } from './components/teacher-info/teacher-info.component';
import { CourseTeacherComponent } from './components/course-teacher/course-teacher.component';
import { StudentTeacherComponent } from './components/student-teacher/student-teacher.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EvaluationTabTeacherComponent } from './components/evaluation-tab-teacher/evaluation-tab-teacher.component';
import { EvaluationsTableComponent } from './components/evaluations-table/evaluations-table.component';
import { CourseStudentComponent } from './components/course-student/course-student.component';
import { EvaluationStudentComponent } from './components/evaluation-student/evaluation-student.component';
import { EvaluationParentComponent } from './components/evaluation-parent/evaluation-parent.component';
import { CourseParentComponent } from './components/course-parent/course-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupTeacherComponent,
    SignupStudentComponent,
    SignupParentComponent,
    SignupAdminComponent,
    HomeComponent,
    LandingPageComponent,
    TeachersComponent,
    BlogComponent,
    ClassesComponent,
    FacilitiesComponent,
    AboutComponent,
    BookingComponent,
    BannerComponent,
    LoginComponent,
    AdminComponent,
    TeachersTableComponent,
    AddCourseComponent,
    CoursesTableComponent,
    CourseInfoComponent,
    CourseDetailsComponent,
    UserInfoComponent,
    TeacherDetailsComponent,
    StudentsTableComponent,
    ParentsTableComponent,
    SearchTeacherComponent,
    FilterPipe,
    UsersTableComponent,
    AffectationTableComponent,
    EvaluationTeacherComponent,
    AdminDashboardComponent,
    TeacherDashboardComponent,
    StudentDashboardComponent,
    ParentDashboardComponent,
    SessionsTableComponent,
    TeacherInfoComponent,
    CourseTeacherComponent,
    StudentTeacherComponent,
    CoursesComponent,
    EvaluationTabTeacherComponent,
    EvaluationsTableComponent,
    CourseStudentComponent,
    EvaluationStudentComponent,
    EvaluationParentComponent,
    CourseParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
