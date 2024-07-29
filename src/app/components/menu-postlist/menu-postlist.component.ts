import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPostModel } from 'src/app/models/blogpost.model';
import { BlogService } from 'src/app/services/blogposts.service';
import { environment } from 'src/environments/environment.prod';
import { SlicePipe } from '@angular/common';

@Component({
    selector: 'app-menu-postlist',
    templateUrl: './menu-postlist.component.html',
    styleUrls: ['./menu-postlist.component.css'],
    standalone: true,
    imports: [SlicePipe]
})
export class MenuPostlistComponent implements OnInit {
  load:boolean=true;
  img="/src/assets/logo.png";
  blogPosts: BlogPostModel[]=[]
  apiUrl=environment.apiUrl;
  constructor(private blogService: BlogService,private routerLink: Router) {
  }
  
  ngOnInit() {
    
    this.loadBlogPosts();
  }

  async loadBlogPosts() {
    this.blogService.getPosts().subscribe((responce)=>{
      if(responce['statusCode']==200){
       
       
         this.blogPosts=responce['body'];
         this.load=false;
      
     }
     else if(responce['statusCode']==404){ this.load=true }
     else if(responce['statusCode']==500){ this.load=true }
 
     });
  }

  openDetailPost(slug: any){
    // window.alert("Post Is: "+_id);
    let url: string ='/post/'+slug;
    this.routerLink.navigateByUrl(url);
  }


}
