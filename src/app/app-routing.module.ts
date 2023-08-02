import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { SignupTeacherComponent } from './components/signup-teacher/signup-teacher.component';
import { SignupStudentComponent } from './components/signup-student/signup-student.component';
import { SignupParentComponent } from './components/signup-parent/signup-parent.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { ClassesComponent } from './components/classes/classes.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { TeachersTableComponent } from './components/teachers-table/teachers-table.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { SearchTeacherComponent } from './components/search-teacher/search-teacher.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';
import { EvaluationTeacherComponent } from './components/evaluation-teacher/evaluation-teacher.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { ParentDashboardComponent } from './components/parent-dashboard/parent-dashboard.component';
import { SessionsTableComponent } from './components/sessions-table/sessions-table.component';
import { TeacherInfoComponent } from './components/teacher-info/teacher-info.component';
import { CourseTeacherComponent } from './components/course-teacher/course-teacher.component';
import { CoursesComponent } from './components/courses/courses.component';


const routes: Routes = [
  {path:"signup-admin", component: SignupAdminComponent},
  {path:"signup-teacher", component: SignupTeacherComponent},
  {path:"signup-student", component: SignupStudentComponent},
  {path:"signup-parent", component: SignupParentComponent},
  {path:"header", component: HeaderComponent},
  {path:"footer", component: FooterComponent},
  {path:"teachers", component: TeachersComponent},
  {path:"classes", component: ClassesComponent},
  {path:"", component: HomeComponent},
  {path:"banner", component: BannerComponent},
  {path:"login", component: LoginComponent},
  {path:"admin", component: AdminComponent},
  {path:"teachersTable", component: TeachersTableComponent},
  {path:"addCourse", component: AddCourseComponent},
  {path:"course-info/:id", component: CourseInfoComponent},
  {path:"user-info/:id", component: UserInfoComponent},
  {path:"teacher-info/:id", component: TeacherInfoComponent},
  {path:"edit-course/:id", component: AddCourseComponent},
  {path:"teachers/search", component: TeachersComponent},
  {path:"searchTeacher", component: SearchTeacherComponent},
  {path:"teacherDetails/:id", component: TeacherDetailsComponent},
  {path:"evaluationTeacher", component: EvaluationTeacherComponent},
  {path:"adminDashboard", component: AdminDashboardComponent},
  {path:"teacherDashboard", component: TeacherDashboardComponent},
  {path:"studentDashboard", component: StudentDashboardComponent},
  {path:"parentDashboard", component: ParentDashboardComponent},
  {path:"sessionsTable", component: SessionsTableComponent},
  {path:"courseTeacher", component: CourseTeacherComponent},
  {path:"courses", component: CoursesComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
