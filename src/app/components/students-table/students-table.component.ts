import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {
  users: any;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllStudents().subscribe((response) => {

      this.users = response.students;
     
      
    });
  }
 DeleteUser(id) {
    this.userService.deleteUserById(id).subscribe((Response) => {
      console.log("is deleted ?", Response.message);
      this.userService.getAllStudents().subscribe((response) => {
        this.users = response.students;
      });
    });
  }
  goToDisplay(x: string) {
    this.router.navigate([`user-info/${x}`]);
  }
}
