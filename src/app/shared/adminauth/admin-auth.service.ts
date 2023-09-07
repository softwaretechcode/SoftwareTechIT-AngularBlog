import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private fireAuth : AngularFireAuth ,private router : Router) {

  }
 async adminLogin(email: string,password:string){
   this.fireAuth.signInWithEmailAndPassword(email,password).then(() => {
     localStorage.setItem('admin-token','true');
     this.router.navigate(['./admin']);
   },err => {
         alert(err.message);
         this.router.navigate(['./admin-login']);
        
   })
 }
 async singUp(email:string,password:string){
  this.fireAuth.createUserWithEmailAndPassword(email,password).then(() => {
    alert("Register Successfully")
    this.router.navigate(['/admin-login']);
  }, err => {
    alert(err.message);
    this.router.navigate(['/sing-up']);
  })
}
async logout(){
this.fireAuth.signOut().then(()=>{
localStorage.removeItem('admin-token');
this.router.navigate(['/admin-login']);
}, err=>{
alert(err.message);
})
}
async autoLogOut(expirationDate: number){

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
