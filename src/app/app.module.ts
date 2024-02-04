import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './components/blog/blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { PostlistComponent } from './components/postlist/postlist.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { DashboardModule } from './dashboard/dash-module/dashboard.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AdminSingUpComponent } from './components/admin-sing-up/admin-sing-up.component';
import { environment } from '../environments/environment';
import { FileManagerComponent } from './dashboard/dash-componets/file-manager/file-manager.component';
import { MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {LoginexComponent  } from "./example/loginex/loginex.component";
import { CreateCategoriesComponent } from './dashboard/dash-componets/create-categories/create-categories.component';
import { MenuPostlistComponent } from './components/menu-postlist/menu-postlist.component';
import { ServiceSectionComponent } from './components/service-section/service-section.component';
import { AdminModule } from './admin/admin-modules/admin/admin.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { HireUsComponent } from './components/hire-us/hire-us.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';

import { VideoComponent } from './youtubeapi/components/video/video.component';
import { PlaylistComponent } from './youtubeapi/components/playlist/playlist.component';
import { YoutubeServiceComponent } from './youtubeapi/services/youtube-service/youtube-service.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { CustomAdsComponent } from './components/custom-ads/custom-ads.component';
import { TagComponent } from './components/tag/tag.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { MyGearComponent } from './components/my-gear/my-gear.component';
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent,
    PostlistComponent,
    LoginComponent,
    LoginexComponent,
    SingUpComponent,
    HomeComponent,
    ErrorPageComponent,
    AdminLoginComponent,
    AdminSingUpComponent,
    FileManagerComponent,
    CreateCategoriesComponent,
    MenuPostlistComponent,
    ServiceSectionComponent,
    ProjectsComponent,
    HireUsComponent,
    MenuCardComponent, 
    VideoComponent,
    PlaylistComponent,
    YoutubeServiceComponent,
    CategoryMenuComponent,
    CustomAdsComponent,
    TagComponent,
    AboutUsComponent,
    SitemapComponent,
    MyGearComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    DashboardModule,
    AdminModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
