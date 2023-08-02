import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  title: string = "login";
  errorMsg: any;
  obj: any = {};
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}
  // login() {
  //   console.log("here is user", this.obj);
  //   this.userService.logain(this.obj).subscribe((response) => {
  //     console.log("here response from BE", response);
  //     if (response.msg != "2") {
  //       this.errorMsg = "please check your email/password";
  //     } else {
  //       localStorage.setItem(
  //         "connectedUser",
  //         JSON.stringify(response.connectedUser)
  //       );
  //       if (response.connectedUser.role == "admin") {
  //         this.router.navigate(["admin"]);
  //       } else {
  //         this.router.navigate([""]);
  //       }
  //     }
  //   });
  // }
  logain() {
    console.log("here is user", this.obj);
    this.userService.logain(this.obj).subscribe((response) => {
      console.log("here response from BE", response);
      if (response.msg == "0" || response.msg == "1") {
        this.errorMsg = "please check your email/password";
      } else if (response.msg == "2") {
        this.errorMsg = "your account is not verified";
      } else if (response.msg == "3") {
        localStorage.setItem(
          "connectedUser",
          JSON.stringify(response.connectedUser)
        );
        if (response.connectedUser.role == "admin") {
          this.router.navigate(["admin"]);
        } else {
          this.router.navigate([""]);
        }
      }
    });
  }
  //  if (findedUser.role == "store") {
  //   if (findedUser.status == "notOk") {
  //     document.getElementById("loginStoreError").innerHTML =
  //       "account in not yet verified ";
  //     document.getElementById("loginStoreError").style.color = "red";
  //   } else {
  //     localStorage.setItem("connectedUserId", findedUser.id);
  //     location.replace("store.html");
  //   }
  // }
}
