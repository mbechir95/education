import { EvaluationService } from "src/app/services/evaluation.service";
import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-evaluation-parent",
  templateUrl: "./evaluation-parent.component.html",
  styleUrls: ["./evaluation-parent.component.css"],
})
export class EvaluationParentComponent implements OnInit {
  confTel: any;
  connectedUser: any;
  user: any;
  students: any = [];
  findedStudent: any = [];
  evaluations: any = [];
  findedEvaluations = [];
  constructor(
    private userService: UserService,
    private evaluationService: EvaluationService
  ) {}

  ngOnInit() {
    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    console.log("id user conf tel", this.connectedUser.confTel);

    this.userService.getAllStudents().subscribe((res) => {
      this.students = res.students;
      console.log("all parents", this.students);
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].tel == this.connectedUser.confTel) {
          this.findedStudent.push(this.students[i]);
        }
        console.log(" finded student ", this.findedStudent);
      }
    });
    this.evaluationService.getAllEvaluations().subscribe((res) => {
      this.evaluations = res.evaluations;
      console.log("  evaluations ", this.evaluations);

      for (let i = 0; i < this.evaluations.length; i++) {
        if (this.evaluations[i].idStudent == this.findedStudent[i]._id) {
          this.findedEvaluations.push(this.evaluations[i]);
        }
        console.log(" finded evaluations ", this.findedEvaluations);
      }
    });
  }
}
