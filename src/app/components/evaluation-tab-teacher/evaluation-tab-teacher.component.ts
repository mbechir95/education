import { UserService } from 'src/app/services/user.service';
import { EvaluationService } from './../../services/evaluation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation-tab-teacher',
  templateUrl: './evaluation-tab-teacher.component.html',
  styleUrls: ['./evaluation-tab-teacher.component.css']
})
export class EvaluationTabTeacherComponent implements OnInit {
  evaluations=[];
  findedEvaluation=[];
  constructor(private EvaluationService :EvaluationService,private  userService:UserService) { }
  user:any;
  users:any;
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("connectedUser"));
    console.log("id teacher", this.user.id);
    
    this.EvaluationService.getAllEvaluations().subscribe((res) => {
      this.evaluations = res.evaluations;
      console.log("evaluations", this.evaluations);
    
      this.findedEvaluation = []; // Initialize the array before the loop
      for (let i = 0; i < this.evaluations.length; i++) {
        if (this.evaluations[i].idTeacher == this.user.id) {
          this.findedEvaluation.push(this.evaluations[i]);
        }
      }
      console.log("finded sessions ", this.findedEvaluation);
    });
    
  }
  DeleteEvaluation(id) {
     this.EvaluationService.deleteEvaluationById(id).subscribe((Response) => {
       console.log("is deleted ?", Response.message);
       this.EvaluationService.getAllEvaluations().subscribe((response) => {
         this.findedEvaluation = response.evaluations;
       });
   });
   }
}
