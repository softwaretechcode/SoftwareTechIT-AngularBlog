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
  
  blogPostsflt: BlogPostModel[]=[];
  categorys:CategoryModel[]=[];
  param=null;
  load:boolean=true;
  chk:boolean=false;
  menuState:any;
  apiUrl=environment.apiUrl;
  isOpened: boolean = true;
  desktopViewWidth: number = 1100;
  
  //DEMO BLOCK
  blogDemoPosts: BlogPostModel[]=[];
  blogDemoPostsflt: BlogPostModel[]=[];
  categorysDemo:CategoryModel[]=[];

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
      this.loadDemoPosts();
    }
    else{
    this.activatedRoute.paramMap.subscribe((x: { get: (arg0: string) => any; }) => {
      this.param = x.get('category');
    });
    this.loadBlogPosts();
    this.loadDemoPosts();
  }
    this.category_serv.getCategorys().subscribe((body)=>{
      this.categorys=body; 
     
      
    });   
    this.category_serv.getDemoCategorys().subscribe((body)=>{
      this.categorysDemo=body;
    })
   
  
  }


  async loadBlogPosts() {

    this.blogService.getPosts().subscribe((responce)=>{
     if(responce['statusCode']==200){
      if(this.param!=null){
       this.blogPostsflt=responce['body'];
      //  console.log(this.blogPostsflt);
       
        this.blogPosts=this.blogPostsflt.filter(e=>e.category==this.param);
        this.blogPosts.forEach(element => {
           if((element.category==this.param)==null){
             this.chk=true;
           }
        });
        this.load=false;
      }
      else{
        this.blogPosts=responce['body'];
        this.load=false;
      }
    }
    else if(responce['statusCode']==404){ this.load=true }
    else if(responce['statusCode']==500){ this.load=true }

    });
  }

  loadDemoPosts(){
    this.blogService.getDemoPosts().subscribe((responce)=>{
      
       if(this.param!=null){
        this.blogDemoPostsflt=responce['body'];
       //  console.log(this.blogPostsflt);
        
         this.blogDemoPosts=this.blogDemoPostsflt.filter(e=>e.category==this.param);
         this.blogDemoPosts.forEach(element => {
            if((element.category==this.param)==null){
              this.chk=true;
            }
         });
         this.load=false;
       }
       else{
         this.blogDemoPosts=responce['body'];
         this.load=false;
       }
     
 
     });
  }
  openDetailPost(slug: any){
    // window.alert("Post Is: "+_id);
    let url: string ='/post/'+slug;
    this.routerLink.navigateByUrl(url);
  }
  
}
