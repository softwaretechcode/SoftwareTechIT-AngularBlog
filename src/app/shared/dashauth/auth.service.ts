import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router,} from '@angular/router';
import { UsersModel } from 'src/app/models/users.models';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl= environment.apiUrl;

  constructor(private http_service:HttpClient, private router : Router) {

   }
  
   async login(email: string,password:string){
    if(email=="softwaretechit@gmail.com" && password=="STIT@08@n") {
      localStorage.setItem('token','true');
      sessionStorage.setItem('email',email);
      this.router.navigate(['./dashboard']);
    }else{
         
          this.router.navigate(['/login']);
         
    }

   }
   async singUp(userModel:UsersModel){
          this.http_service.post(this.apiUrl, userModel).subscribe(() => {
            alert("Register Successfully")
            this.router.navigate(['/login']);
          }, err => {
            alert(err.message);
            this.router.navigate(['/sing-up']);
          })
   }
   async logout(){
   
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    
   }
   // Send email verfificaiton when new user sign up
  sendVerificationMail() {
    return 
  }
  // Reset Forggot password
  forgotPasswordService(passwordResetEmail: string) {
    return 
  }

}
