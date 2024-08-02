import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from 'src/app/shared/dashauth/auth.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { EditPostComponent } from './dash-componets/dash-edit-post/edit-post.component';
import { ProfileComponent } from './dash-componets/dash-profile/profile.component';
import { UsersComponent } from './dash-componets/dash-users/users.component';
import { BlogpostsComponent } from './dash-componets/dash-blogposts/blogposts.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatActionList, MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [EditPostComponent, ProfileComponent, UsersComponent, BlogpostsComponent, LayoutModule, MatToolbarModule, MatProgressBarModule, FormsModule, MatIconModule, MatSidenavModule, MatListModule, RouterModule]
})
export class DashboardComponent implements OnInit {
  dashLNK = null;
  menuItems = [{ title: 'Dashboard', link: './', icon: 'dashboard' }, { title: 'Profile', link: './profile', icon: 'account_box' }, { title: 'Users', link: './users', icon: 'supervisor_account' }, { title: 'Edit Post', link: './edit-post', icon: 'create' }, { title: 'Blog Posts', link: './blog-posts', icon: "view_list" }, { title: 'Create Category', link: './create-category', icon: "category" }];
  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  localtoken = false;

  ngOnInit(): void {
    if (localStorage.getItem('token') == 'true') {
      this.localtoken = true;
    }
    else {
      this.localtoken = false;
    }

  }
  constructor(private observer: BreakpointObserver, private cd: ChangeDetectorRef, private auth: AuthService, public router: Router) {

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
