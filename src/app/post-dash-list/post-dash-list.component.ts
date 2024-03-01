import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BlogPostModel } from 'src/app/models/blogpost.model';
import { BlogService } from 'src/app/services/blogposts.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-post-dash-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-dash-list.component.html',
  styleUrls: ['./post-dash-list.component.css']
})
export class PostDashListComponent implements OnInit {

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
