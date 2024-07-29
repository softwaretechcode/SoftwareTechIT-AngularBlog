import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routes';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { EditPostComponent } from '../dash-componets/dash-edit-post/edit-post.component';
import { ProfileComponent } from '../dash-componets/dash-profile/profile.component';
import { UsersComponent } from '../dash-componets/dash-users/users.component';
import { BlogpostsComponent } from '../dash-componets/dash-blogposts/blogposts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';
import { BlogComponent } from 'src/app/components/blog/blog.component';
import { PostlistComponent } from 'src/app/components/postlist/postlist.component';
// import { } from 'ckeditor5/build/ckeditor.js'

@NgModule({
    declarations: [DashboardComponent],
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
        EditPostComponent,
        ProfileComponent,
        UsersComponent,
        BlogpostsComponent,
    ],
    providers: [],
    bootstrap: [DashboardComponent]
})
export class DashboardModule { }
