import { Breakpoints } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { BlogPostModel, CategoryModel, PostStatusEnum } from 'src/app/models/blogpost.model';
import { CategoryService } from 'src/app/dashboard/dash-services/category.service';
import { BlogService } from 'src/app/services/blogposts.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPostModel[]=[];
  categorys:CategoryModel[]=[];
  param=null;
  chk=null;
  menuState:any;
  apiUrl=environment.apiUrl;
  isOpened: boolean = true;
  desktopViewWidth: number = 1100;
  constructor(private blogService: BlogService,private category_serv : CategoryService,private routerLink: Router, private activatedRoute: ActivatedRoute) {
  }
  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isOpened = width >= this.desktopViewWidth;
  }
  ngOnInit() {
    this.onResize(window.innerWidth);
   
    if(!this.activatedRoute.params){
      this.loadBlogPosts();
    }
    else{
    this.activatedRoute.paramMap.subscribe((x: { get: (arg0: string) => any; }) => {
      this.param = x.get('category');
    });
    this.loadBlogPosts();
  }
    this.category_serv.getCategorys().subscribe((body)=>{
      this.categorys=body; 
    });   
   
  
  }


  async loadBlogPosts() {

    this.blogService.getPosts().subscribe((body)=>{
      if(this.param!=null){
        this.blogPosts=body.filter(e=>e.category==this.param);
        this.blogPosts.forEach(element => {
           if((element.category==this.param)==null){
             this.chk=true;
           }
        });
      }
      else{
        this.blogPosts=body;
      }
    });
  }

  openDetailPost(slug: any){
    // window.alert("Post Is: "+_id);
    let url: string ="/post/"+slug;
    this.routerLink.navigateByUrl(url);
  }
  
}
