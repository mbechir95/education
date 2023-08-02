import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-sessions-table',
  templateUrl: './sessions-table.component.html',
  styleUrls: ['./sessions-table.component.css']
})
export class SessionsTableComponent implements OnInit {
  sessions :any;
  constructor(private sessionService :SessionService) { }

  ngOnInit() {
    this.sessionService.getAllSessions().subscribe(
      (response)=> {
       
        
        this.sessions=response.sessions;
        console.log("sessions",this.sessions)

      }
    ); 

  }

  DeleteSession(id) {
    this.sessionService.deleteSessionById(id).subscribe((Response) => {
      console.log("is deleted ?", Response.message);
      this.sessionService.getAllSessions().subscribe((response) => {
        this.sessions = response.sessions;
      });
    });
  }

}
