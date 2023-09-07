import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/dashauth/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  email:string ='';
  password:string ='';
  constructor(private auth:AuthService) {
   }

  ngOnInit(): void {
  }
  async login(){
    if(this.email=='' || this.password==''){
      alert('Please Enter Email & Password');
      return;
    }else{
      this.auth.login(this.email,this.password)
      this.email='';
      this.password='';
    }
    
  }
  forgetPassword(){
    this.auth.forgotPasswordService(this.email);
  }
}
