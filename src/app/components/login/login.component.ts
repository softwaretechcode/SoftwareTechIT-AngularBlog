import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/dashauth/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  // email:string ='';
  // password:string ='';
  constructor(private auth:AuthService) {
   }

  ngOnInit(): void {
  }
   login(loginForm ){
    if(loginForm.email=='' || loginForm.password==''){
      alert('Please Enter Email & Password');
      return;
    }else{
      // this.email=loginForm.email;
      // this.password=loginForm.password;

      this.auth.login(loginForm.email,loginForm.password)
      loginForm.email='';
      loginForm.password='';
    }
    
  }
  forgetPassword(email){
    alert(email);
    this.auth.forgotPasswordService(email);
  }
}
