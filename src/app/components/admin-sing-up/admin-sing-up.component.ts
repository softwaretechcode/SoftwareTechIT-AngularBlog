import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/shared/adminauth/admin-auth.service';

@Component({
  selector: 'app-admin-sing-up',
  templateUrl: './admin-sing-up.component.html',
  styleUrls: ['./admin-sing-up.component.css']
})
export class AdminSingUpComponent implements OnInit {

  email:string ='';
  password:string ='';
  constructor(private auth:AdminAuthService) {
   }

  ngOnInit(): void {
  }
  singUp(){
    
    if(this.email==''){
      alert('Please Enter Email');
      return;
    }
    if(this.password==''){
     alert('Please Enter Password');
     return;
    }
    this.auth.singUp(this.email,this.password);
    this.email='';
    this.password='';
  }


}
