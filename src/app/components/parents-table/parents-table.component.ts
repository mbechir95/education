import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-parents-table',
  templateUrl: './parents-table.component.html',
  styleUrls: ['./parents-table.component.css']
})
export class ParentsTableComponent implements OnInit {
  users: any;

  constructor(private userService : UserService , private router:Router) { }

  ngOnInit() {
    this.userService.getAllParents().subscribe((response) => {
      this.users = response.parents;
     
      
      
    });
  }
  DeleteUser(id) {
    this.userService.deleteUserById(id).subscribe((Response) => {
      console.log("is deleted ?", Response.message);
      this.userService.getAllParents().subscribe((response) => {
        this.users = response.parents;
      });
    });
  }
  goToDisplay(x: string) {
    this.router.navigate([`user-info/${x}`]);
  }
}
