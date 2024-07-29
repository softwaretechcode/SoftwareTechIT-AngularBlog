import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/dashauth/auth.service';
import { UsersModel } from 'src/app/models/users.models';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
    selector: 'app-sing-up',
    templateUrl: './sing-up.component.html',
    styleUrls: ['./sing-up.component.css'],
    standalone: true,
    imports: [FormsModule, NgClass, RouterLink]
})
export class SingUpComponent implements OnInit {
 
 
  constructor(private auth : AuthService) {
   }

  ngOnInit(): void {
  }
  async singUp(singUpForm:UsersModel){
    
    if(singUpForm){
      alert('Please Fill Form');
      return;
    }
    
    this.auth.singUp(singUpForm);
    
  }

}
