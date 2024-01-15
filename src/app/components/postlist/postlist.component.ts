import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPostModel, CategoryModel } from 'src/app/models/blogpost.model';
import { CategoryService } from 'src/app/dashboard/dash-services/category.service';
import { BlogService } from 'src/app/services/blogposts.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  img="/src/assets/logo.png";
  apiUrl=environment.apiUrl;
  blogPosts: BlogPostModel[]=[]
  load:boolean=true;
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
