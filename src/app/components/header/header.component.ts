import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any;
  role;
  constructor(private router:Router) { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem("connectedUser"));
    console.log("here user from ls ",this.user );
    this.role=this.user.role;
    console.log("here user from ls ",this.role );

  }
 LogOut(){
  localStorage.removeItem("connectedUser");
  this.router.navigate([""]);
}
}
