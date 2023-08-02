import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-teacher-info",
  templateUrl: "./teacher-info.component.html",
  styleUrls: ["./teacher-info.component.css"],
})
export class TeacherInfoComponent implements OnInit {
  title: string = "Teacher info";
  teacherId: any;
  findedTeacher: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.teacherId = this.activatedRoute.snapshot.paramMap.get("id");

    this.userService.getUserById(this.teacherId).subscribe((response) => {
      this.findedTeacher = response.user;
    });
  }
}
