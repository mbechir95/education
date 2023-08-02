import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvaluationService } from 'src/app/services/evaluation.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-evaluation-student',
  templateUrl: './evaluation-student.component.html',
  styleUrls: ['./evaluation-student.component.css']
})
export class EvaluationStudentComponent implements OnInit {
  students:any;
  user:any;
  evaluations:any=[];
  findedEvaluation:any=[];
  constructor(private evaluationService:EvaluationService, private router :Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("connectedUser"));
    console.log("id user id",this.user.id);

    this.evaluationService.getAllEvaluations().subscribe((response) => {
      this.evaluations = response.evaluations;
      console.log("all sessions", this.evaluations);
      for (let i = 0; i < this.evaluations.length; i++) {
        if (this.evaluations[i].idStudent == this.user.id) {
          this.findedEvaluation.push(this.evaluations[i]);
          console.log("finded sessions ", this.evaluations);
        }
      }
    });
  }

}
