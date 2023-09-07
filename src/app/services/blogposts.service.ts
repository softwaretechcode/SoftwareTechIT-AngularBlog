import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPostModel } from "../models/blogpost.model";
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
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

  getPosts():Observable<BlogPostModel[]> {  
    return this.http.get<BlogPostModel[]>(this.apiUrl+"blog-posts");
  }
  getPostsByLimit(byLimit:Number):Observable<BlogPostModel[]> {  
    
    return this.http.get<BlogPostModel[]>(this.apiUrl+"blog-posts/");
  }
  getSinglePost(slug:string):Observable<BlogPostModel> {  
    return this.http.get<BlogPostModel>(this.apiUrl+"blog-posts/"+slug);
  }
  updatePost(id: string, post: BlogPostModel): Observable<any> {
    const url = `${this.apiUrl}/blog-posts/${id}`;
    return this.http.put<BlogPostModel>(url, post);
  }

  deletePost(id: string): Observable<any> {
    const url = `${this.apiUrl}/blog-posts/${id}`;
    return this.http.delete<BlogPostModel>(url);
  }
}
