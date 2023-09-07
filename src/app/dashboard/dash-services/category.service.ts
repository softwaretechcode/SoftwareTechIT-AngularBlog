import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CategoryModel, generateCategorySlug, generateTitleSlug } from '../../models/blogpost.model';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 apiUrl=environment.apiUrl;

  constructor(private http_serv : HttpClient) { }
 
  getCategorys():Observable <CategoryModel[]> {
    return this.http_serv.get<CategoryModel[]>(this.apiUrl + "posts/category");

  }
  getSingleCategory(_id : number){
   return this.http_serv.get<CategoryModel>(this.apiUrl+"posts/category/"+_id);
  }
  createCategory(category: CategoryModel){
    category.slug=generateCategorySlug(category.name);
    category.date=formatDate(new Date(), 'yyyy/MM/dd', 'en');
    console.log(category.date);
    
    try{
    this.http_serv.post(this.apiUrl+'posts/category',category).subscribe((res)=>{
      return res;
    });
      console.log("Category Creating Please Wait");
    } catch(err){
      console.log(err);
    }   
  }
}
