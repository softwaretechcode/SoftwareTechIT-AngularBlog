import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blogposts.service';
import { BlogPostModel } from '../../../models/blogpost.model';
import { Router, Routes } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css']
})
export class BlogpostsComponent implements OnInit {
apiUrl=environment.apiUrl;
  blogPosts: BlogPostModel[]=[]
  
  constructor(private blogService: BlogService,private routerLink :Router) {}

  ngOnInit() {
    this.loadBlogPosts();
  }

  async loadBlogPosts() {
    this.blogService.getPosts().subscribe((body)=>{
      this.blogPosts=body;  
    })
  }
  openDetailPost(slug: any){
    // window.alert("Post Is: "+_id);
    let url: string ="/post/"+slug;
    this.routerLink.navigateByUrl(url);
  }
  

}
