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

  //DEMO BLOCK
  categorysDemo:CategoryModel[]=[];
  load:boolean=false;
  constructor(private category_serv : CategoryService,private routerLink: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.category_serv.getCategorys().subscribe((responce)=>{
      if(responce['statusCode']==200){
      this.categorys=responce['body'];
      this.load=false;
      }
      else if(responce['statusCode']==500){
        this.load=true;
        this.routerLink.navigate['/404']
      }
      else if(responce['statusCode']==404){
        this.load=true;
        this.routerLink.navigate['/404']
      }
    });  

    this.category_serv.getDemoCategorys().subscribe((responce)=>{
      if(responce['statusCode']==200){
      this.categorysDemo=responce['body'];
      this.load=false;
      }
      else if(responce['statusCode']==500){
        this.load=true;
        this.routerLink.navigate['/404']
      }
      else if(responce['statusCode']==404){
        this.load=true;
        this.routerLink.navigate['/404']
      }
    });  
  }

}
