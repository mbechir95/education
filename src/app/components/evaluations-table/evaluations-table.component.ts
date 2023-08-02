import { Component, OnInit } from '@angular/core';
import { EvaluationService } from 'src/app/services/evaluation.service';

@Component({
  selector: 'app-evaluations-table',
  templateUrl: './evaluations-table.component.html',
  styleUrls: ['./evaluations-table.component.css']
})
export class EvaluationsTableComponent implements OnInit {
evaluations:any;
  constructor(private  evaluationService:EvaluationService) { }

  ngOnInit() {

    this.evaluationService.getAllEvaluations().subscribe((res)=>{

      this.evaluations=res.evaluations;
    })
    
  }

}
