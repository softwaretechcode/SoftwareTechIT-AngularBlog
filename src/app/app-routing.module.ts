import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { PostlistComponent } from './components/postlist/postlist.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AdminLoginGuard } from './shared/adminauth/admin-login.guard';
import { LogInAuthGuard } from './shared/dashauth/log-in-auth.guard';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminSingUpComponent } from './components/admin-sing-up/admin-sing-up.component';
import { LoginexComponent } from "./example/loginex/loginex.component";
import { ProjectsComponent } from './components/projects/projects.component';
import { HireUsComponent } from './components/hire-us/hire-us.component';
import { TagComponent } from './components/tag/tag.component';
import { MenuPostlistComponent } from './components/menu-postlist/menu-postlist.component';

const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'index.html', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:category', component: BlogComponent },
  { path: 'postlist', component: PostlistComponent },
  { path: 'postlist/:name', component: PostlistComponent },
  { path: 'post/:slug', component: PostComponent },
  { path: 'login', component: LoginComponent,canActivate: [LogInAuthGuard] },
  { path: 'sing-up', component: SingUpComponent,canActivate: [LogInAuthGuard] },
  { path: 'admin-login', component: AdminLoginComponent,canActivate: [AdminLoginGuard]},
  {path: 'admin-singup',component:AdminSingUpComponent,canActivate:[AdminLoginGuard]},
  {path:'404',component: ErrorPageComponent},
  {path:'examples/login', component:LoginexComponent },
  {path:'projects',component:ProjectsComponent},
  {path:'hireus',component:HireUsComponent},
  {path:'tag',component:TagComponent},
  {path:'tag/:name',component:TagComponent},
  {path:'menu-postlist',component:MenuPostlistComponent},
  {path: '**', redirectTo:'/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
