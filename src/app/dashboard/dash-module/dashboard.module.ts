import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { EditPostComponent } from '../dash-componets/dash-edit-post/edit-post.component';
import { ProfileComponent } from '../dash-componets/dash-profile/profile.component';
import { UsersComponent } from '../dash-componets/dash-users/users.component';
import { BlogpostsComponent } from '../dash-componets/dash-blogposts/blogposts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BlogComponent } from 'src/app/components/blog/blog.component';
import { PostlistComponent } from 'src/app/components/postlist/postlist.component';
// import { } from 'ckeditor5/build/ckeditor.js'

@NgModule({
  declarations: [
    DashboardComponent,
    EditPostComponent,
    ProfileComponent,
    UsersComponent,
    BlogpostsComponent, 

    
  ],

  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DashboardRoutingModule,
    FormsModule,
    HttpClientModule,
    MatProgressBarModule,
    
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
