import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  sessionURl: string = "http://localhost:3000/sessions";
  constructor(private httpClient: HttpClient) { }
  addSession(sessionObj) {
    return this.httpClient.post<{ msg: string }>(this.sessionURl, sessionObj);
  }
  idVerification(sessionObj) {
    return this.httpClient.post<{ msg: string }>(this.sessionURl + "/idVerification",sessionObj );
  }
  getSessionById(id) {
    return this.httpClient.get<{ user: any }>(this.sessionURl + "/" + id);
  }
  getSessionByIdCourse(id) {
    return this.httpClient.get<{ session: any }>(this.sessionURl + "/idCourse/" + id);
  }
  getAllSessions() {
    return this.httpClient.get<{ sessions: any }>(this.sessionURl);
  }
  deleteSessionById(id) {
    return this.httpClient.delete<{ message: string }>(this.sessionURl + "/" + id);
  }
}
