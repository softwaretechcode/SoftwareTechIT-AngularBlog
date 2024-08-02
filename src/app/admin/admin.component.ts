import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';
import { AdminAuthService } from 'src/app/shared/adminauth/admin-auth.service';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminProfileComponent } from './admin-components/admin-profile/admin-profile.component';
import { AddAdminComponent } from './admin-components/add-admin/add-admin.component';
import { EditAdminComponent } from './admin-components/edit-admin/edit-admin.component';
import { AdminSettingsComponent } from './admin-components/admin-settings/admin-settings.component';
import { AdminDashViewComponent } from './admin-components/admin-dash-view/admin-dash-view.component';
import { AdminHomeComponent } from './admin-components/admin-home/admin-home.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  standalone: true,
  imports: [ CommonModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,
    AdminProfileComponent, AddAdminComponent, EditAdminComponent, AdminSettingsComponent, AdminDashViewComponent,
    AdminHomeComponent,RouterModule]
})
export class AdminComponent implements OnInit {
  menuItems = [{ title: 'Admin', link: './', icon: 'dashboard' }, { title: 'Profile', link: './profile', icon: 'account_box' }, { title: 'Add Admin', link: './add-admin', icon: 'supervisor_account' }, { title: 'Edit Admin', link: './edit-admin', icon: 'create' }, { title: 'View Dash', link: './view-dash', icon: "view_list" }, { title: 'Settings', link: './admin-settings', icon: "settings" }];
  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  localtoken = false;
  ngOnInit(): void {
    if (localStorage.getItem('admin-token') == 'true') {
      this.localtoken = true;
    }
    else {
      this.localtoken = false;
    }

  }
  constructor(private observer: BreakpointObserver, private cd: ChangeDetectorRef, private auth: AdminAuthService, public router: Router) {

  }
  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observe(['(max-width:800px)'])
      .subscribe((res) => {
        if (res?.matches) {
          this.sideNav.mode = "over";
          this.sideNav.close();
        } else {
          this.sideNav.mode = 'side';
          this.sideNav.open();
        }
      })
    this.cd.detectChanges();
  }
  logOut() {
    this.auth.logout();
    return;
  }




}
