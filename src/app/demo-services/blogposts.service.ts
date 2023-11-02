import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BlogPostModel } from "../models/blogpost.model";
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  demoUrl="http://localhost:4200/assets/json/posts.json"
  apiUrl = environment.apiUrl // Update with your backend API URL

  constructor(private http: HttpClient) { }

  createPost(post: BlogPostModel) {  
    try{
      
    this.http.post(this.apiUrl+"blog-posts",post).subscribe((res)=>{
      alert(res);
    });
      console.log("Post Creating Please Wait");
      
    } catch(err){
      console.log(err);
    }   
   
  }
 getDemoPosts(){
  return this.http.get(this.demoUrl);
 }
  getPosts() {  
    return this.http.get(this.apiUrl+"blog-posts");
  }
  getPostsByLimit(byLimit:Number):Observable<BlogPostModel[]> {  
    
    return this.http.get<BlogPostModel[]>(this.apiUrl+"blog-posts/");
  }
  getSinglePost(slug:string){  
    
    return this.http.get(`${this.apiUrl}blog-posts/${slug}`);
  }
  getSingleDemoPost(slug:string){
    return this.http.get(`blog-posts/${slug}`);
  }
  updatePost(id: string, post: BlogPostModel): Observable<any> {
    const url = `${this.apiUrl}blog-posts/${id}`;
    return this.http.put<BlogPostModel>(url, post);
  }

  deletePost(id: string): Observable<any> {
    const url = `${this.apiUrl}blog-posts/${id}`;
    return this.http.delete<BlogPostModel>(url);
  }
}
