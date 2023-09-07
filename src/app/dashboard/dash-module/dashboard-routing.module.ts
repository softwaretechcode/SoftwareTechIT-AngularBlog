import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { EditPostComponent } from '../dash-componets/dash-edit-post/edit-post.component';
import { UsersComponent } from '../dash-componets/dash-users/users.component';
import { ProfileComponent } from '../dash-componets/dash-profile/profile.component';
import { AuthGuard } from '../../shared/dashauth/auth.guard';
import { BlogpostsComponent } from '../dash-componets/dash-blogposts/blogposts.component';
import { ErrorPageComponent } from '../../components/error-page/error-page.component';
import { FileManagerComponent } from '../dash-componets/file-manager/file-manager.component';
import { CreateCategoriesComponent } from '../dash-componets/create-categories/create-categories.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'edit-post', component: EditPostComponent },
      { path: 'users', component: UsersComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'blog-posts', component: BlogpostsComponent },
      {path: 'create-category',component: CreateCategoriesComponent},
      {path:'file-manager',component: FileManagerComponent},
     
    ], canActivate: [AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
