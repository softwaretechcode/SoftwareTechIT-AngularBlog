import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPostModel } from 'src/app/models/blogpost.model';
import { BlogService } from 'src/app/services/blogposts.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu-postlist',
  templateUrl: './menu-postlist.component.html',
  styleUrls: ['./menu-postlist.component.css']
})
export class MenuPostlistComponent implements OnInit {

  img="/src/assets/logo.png";
  blogPosts: BlogPostModel[]=[]
  apiUrl=environment.apiUrl;
  constructor(private blogService: BlogService,private routerLink: Router) {
  }
  
  ngOnInit() {
    
    this.loadBlogPosts();
  }

  async loadBlogPosts() {
    let res;
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
