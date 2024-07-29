import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BlogPostModel } from 'src/app/models/blogpost.model';
import { BlogService } from 'src/app/services/blogposts.service';
import { environment } from 'src/environments/environment.prod';
import { SlicePipe } from '@angular/common';
import { CategoryMenuComponent } from '../category-menu/category-menu.component';
import { CustomAdsComponent } from '../custom-ads/custom-ads.component';
import { MenuPostlistComponent } from '../menu-postlist/menu-postlist.component';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    standalone: true,
    imports: [RouterLink, MenuPostlistComponent, CustomAdsComponent, CategoryMenuComponent, SlicePipe]
})
export class PostComponent implements OnInit {
  load:boolean=true;
  slug: string;
  post: BlogPostModel;
  apiUrl=environment.apiUrl;
  constructor(private activatedRoute: ActivatedRoute,private blog_service:BlogService,private routerLink:Router) {
    this.activatedRoute.paramMap.subscribe((x: { get: (arg0: string) => any; }) => {
      this.slug = x.get('slug');
      this.load=true;
    });
  }
  ngOnInit(): void {
   this.blog_service.getSinglePost(this.slug).subscribe(
    (responce)=>{
      if(responce['statusCode']==200){
        this.load=false;
        this.post=responce['body'];
      }
      else if(responce['statusCode']==404 && responce['statusCode']==500){
        this.routerLink.navigate['/404'];
        
      }
    
    },err=>{
      
      console.log(err);
      
    });
   
  
  }
  
  
}
