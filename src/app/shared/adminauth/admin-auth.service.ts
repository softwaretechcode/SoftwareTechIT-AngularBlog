import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private router : Router) {

  }
 async adminLogin(email: string,password:string){
  if(email=="softwaretechit@gmail.com" && password=="STIT@08@n"){
     localStorage.setItem('admin-token','true');
     this.router.navigate(['./admin']);
   }else {
         
         this.router.navigate(['./admin-login']);
        
   }
 }
 async singUp(email:string,password:string){
  
    this.router.navigate(['/admin-login']);
 
}
async logout(){

localStorage.removeItem('admin-token');
this.router.navigate(['/admin-login']);

}
async autoLogOut(expirationDate: number){

}
// Reset Forggot password
forgotPasswordService(passwordResetEmail: string) {
  return 
  
}
}
