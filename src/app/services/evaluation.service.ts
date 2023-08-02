import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  evaluationURl: string = "http://localhost:3000/evaluations";

  constructor(private httpClient: HttpClient) {}
  getAllEvaluations() {
    return this.httpClient.get<{ evaluations: any }>(this.evaluationURl);
  }
  addEvaluation(evaluationObj) {
    return this.httpClient.post<{ msg: string }>(this.evaluationURl, evaluationObj);
  }
   //response: boolean/string
   deleteEvaluationById(id) {
    return this.httpClient.delete<{ message: string }>(this.evaluationURl + "/" + id);
  }
  getEvaluationById(id) {
    return this.httpClient.get<{ evaluation: any }>(this.evaluationURl + "/" + id);
  }
}
