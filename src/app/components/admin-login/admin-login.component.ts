import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../../shared/adminauth/admin-auth.service';
 


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
 
  email:string ='';
  password:string ='';
  constructor(private auth:AdminAuthService) {
   }

  ngOnInit(): void {
  }
  login(adminLoginForm :any){
    if(adminLoginForm.email=='' || adminLoginForm.password==''){
      alert('Please Enter Email & Password');
      return;
    }else{
      this.email=adminLoginForm.email;
      this.password=adminLoginForm.password;
      this.auth.adminLogin(this.email,this.password)
     
    }
    
  }
  forgetPassword(email: any){
    this.auth.forgotPasswordService(email);
  }
}
