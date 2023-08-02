import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURl: string = "http://localhost:3000/users";

  constructor(private httpClient: HttpClient) { }
  addUser(userObj, img: File) {
    let fData= new  FormData();
    fData.append("img",img);
    fData.append("firstName",userObj.firstName);
    fData.append("lastName",userObj.lastName);
    fData.append("email",userObj.email);
    fData.append("password",userObj.password);
    fData.append("confPassword",userObj.confPassword);
    fData.append("role",userObj.role);
    fData.append("status",userObj.status);
    fData.append("tel",userObj.tel);
     if (userObj.speciality) {
      fData.append("speciality",userObj.speciality);

    }

    return this.httpClient.post<{ msg: boolean }>( this.userURl + "/signup", fData );
  }
  login(userObj) {
    return this.httpClient.post<{ msg: string; connectedUser: any }>(
      this.userURl + "/login",
      userObj
    );
  }
  getAllUsers() {
    return this.httpClient.get<{ users: any }>(this.userURl);
  }
  getAllTeachers() {
    return this.httpClient.get<{ teachers: any }>(this.userURl+ "/teachers");
  }
  getAllParents() {
    return this.httpClient.get<{ parents: any }>(this.userURl+ "/parents");
  }
  deleteUserById(id) {
    return this.httpClient.delete<{ message: string }>(this.userURl + "/" + id);
  }
  getUserById(id) {
    return this.httpClient.get<{ user: any }>(this.userURl + "/" + id);
  }

  validateUser(id) {
    return this.httpClient.get<{ updated: any }>(this.userURl + "/validate/" + id);
  }
 
  logain(userObj) {
    return this.httpClient.post<{ msg: string; connectedUser: any }>(
      this.userURl + "/logain",
      userObj
    );
  }
  getAllStudents() {
    return this.httpClient.get<{ students: any }>(this.userURl+ "/students");
  }
  addParent(userObj) {
    return this.httpClient.post<{ msg: string }>(this.userURl + "/parents", userObj);
  }
  telVerification(userObj) {
    return this.httpClient.post<{ msg: string }>(this.userURl + "/telVerification",userObj );
  }
  getUserByTel(id) {
    return this.httpClient.get<{ user: any }>(this.userURl + "/parentById/" + id);
  }
}
