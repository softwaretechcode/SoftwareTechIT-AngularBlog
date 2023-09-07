import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AdminAuthService } from 'src/app/shared/adminauth/admin-auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  menuItems = [{title:'Admin',link:'./',icon:'dashboard'}, {title:'Profile',link:'./profile',icon:'account_box'},{title:'Add Admin',link:'./add-admin',icon:'supervisor_account'},{title:'Edit Admin',link:'./edit-admin',icon:'create'},{title:'View Dash', link:'./view-dash',icon:"view_list"},{title:'Settings', link:'./admin-settings',icon:"settings"}];
  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  localtoken=false;
  ngOnInit(): void {
    if(localStorage.getItem('admin-token') == 'true'){
      this.localtoken=true;
    }
    else{
      this.localtoken=false;
    }

  }
  constructor(private observer : BreakpointObserver, private cd : ChangeDetectorRef,private auth : AdminAuthService, public router:Router){

  }
  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observe(['(max-width:800px)'])
    .subscribe((res)=>{
      if(res?.matches){
        this.sideNav.mode="over";
        this.sideNav.close();
      }else{
        this.sideNav.mode = 'side';
        this.sideNav.open();
      }
    })
    this.cd.detectChanges();
  }
  logOut(){
    this.auth.logout();
    return;
    }

 


}
