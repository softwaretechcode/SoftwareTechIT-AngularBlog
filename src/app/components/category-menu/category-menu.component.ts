import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/dashboard/dash-services/category.service';
import { CategoryModel } from 'src/app/models/blogpost.model';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {
  categorys:CategoryModel[]=[];
  constructor(private category_serv : CategoryService,private routerLink: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.category_serv.getCategorys().subscribe((body)=>{
      this.categorys=body; 
    });  
  }

}
