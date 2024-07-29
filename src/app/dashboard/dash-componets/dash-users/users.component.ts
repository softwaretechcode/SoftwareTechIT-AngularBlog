import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    standalone: true
})
export class UsersComponent implements OnInit {
  users:Users[];
  constructor(private httpUserSercice: UsersService) {

   }

  ngOnInit(): void {
  }
  getUsers(){
    
  }
}
