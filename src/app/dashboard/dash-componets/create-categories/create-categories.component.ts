import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../../models/blogpost.model';
import { NgForm, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {formatDate} from '@angular/common';
import { CategoryService } from '../../dash-services/category.service';

@Component({
    selector: 'app-create-categories',
    templateUrl: './create-categories.component.html',
    styleUrls: ['./create-categories.component.css'],
    standalone: true,
    imports: [FormsModule]
})
export class CreateCategoriesComponent implements OnInit {

  constructor(private http_serv: CategoryService ) { }

  ngOnInit(): void {
  }
  saveCategories(saveCategory : CategoryModel){
  const res= this.http_serv.createCategory(saveCategory);   
  console.log(res);
   
  }

}
