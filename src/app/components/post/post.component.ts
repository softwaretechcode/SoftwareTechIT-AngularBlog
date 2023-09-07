import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostModel } from 'src/app/models/blogpost.model';
import { BlogService } from 'src/app/services/blogposts.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  slug: string;
  post: BlogPostModel;
  apiUrl=environment.apiUrl;
  constructor(private activatedRoute: ActivatedRoute,private blog_service:BlogService) {
    this.activatedRoute.paramMap.subscribe((x: { get: (arg0: string) => any; }) => {
      this.slug = x.get('slug');
    });
  }
  ngOnInit(): void {
   this.blog_service.getSinglePost(this.slug).subscribe(
    (post)=>{
      this.post=post;
      // console.log(this.post);
      
    });
   
  
  }
  
  
}
