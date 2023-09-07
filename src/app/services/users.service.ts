import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Users } from "src/app/models/users";
import { Database,list,object } from '@angular/fire/database';
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