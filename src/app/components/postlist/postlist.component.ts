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
  constructor(private blogService: BlogService,private routerLink: Router) {
  }
  ngOnInit() {
    
    this.loadBlogPosts();
  }

  async loadBlogPosts() {
    
    this.blogService.getPostsByLimit(12).subscribe((body)=>{
      this.blogPosts=body;
      
    })
  }

  openDetailPost(slug: any){
    // window.alert("Post Is: "+_id);
    let url: string ="/post/"+slug;
    this.routerLink.navigateByUrl(url);
  }

}
