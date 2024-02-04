import { Injectable } from '@angular/core';
import { Users } from "src/app/models/users";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  constructor( private userServ:HttpClient) {
   
   }

   addUsers(users:Users) {
  //  this.userServ.put();
  }

} 