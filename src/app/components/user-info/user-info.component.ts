import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  title: string = "User info";
  userId: any;
  findedUser: any;
  constructor(private activatedRoute:ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get("id");
    this.userService.getUserById(this.userId).subscribe(
           (response)=>{
             this.findedUser=response.user;
           }
         
       );
  }

}
