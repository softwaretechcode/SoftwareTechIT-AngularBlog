import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router,} from '@angular/router';
import { Observable } from 'rxjs';
import { UsersModel } from 'src/app/models/users.models';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl= environment.apiUrl;

  constructor(private fireAuth : AngularFireAuth,private http_service:HttpClient, private router : Router) {

   }
  
   async login(email: string,password:string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then(() => {
      localStorage.setItem('token','true');
      sessionStorage.setItem('email',email);
      this.router.navigate(['./dashboard']);
    },err => {
          alert(err.message);
          this.router.navigate(['/login']);
         
    })

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
    this.fireAuth.signOut().then(()=>{
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }, err=>{
      alert(err.message);
    })
   }
   // Send email verfificaiton when new user sign up
  sendVerificationMail() {
    return this.fireAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }
  // Reset Forggot password
  forgotPasswordService(passwordResetEmail: string) {
    return this.fireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

}
