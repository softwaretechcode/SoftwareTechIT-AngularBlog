import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FileHandler, FileUploadModel } from '../../dash-models/file-handle.model';
import { Users } from '../../../models/users';
import { BlogPostModel, CategoryModel, PostStatusEnum, generateCategorySlug, generateTitleSlug } from '../../../models/blogpost.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { BlogService } from 'src/app/services/blogposts.service';
import { Observable } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { FileuploadService } from '../../dash-services/fileupload.service';
import { formatDate, NgStyle } from '@angular/common';
import { CategoryService } from '../../dash-services/category.service';
import { FormBuilder, FormGroup, NgModel, Validators, FormsModule } from '@angular/forms';


@Component({
    selector: 'app-edit-post',
    templateUrl: './edit-post.component.html',
    styleUrls: ['./edit-post.component.css'],
    standalone: true,
    imports: [FormsModule, NgStyle],
})
export class EditPostComponent implements OnInit {
  @Input() model: NgModel;
  @Input() values = [];
  @Input() text = 'Select All';

  selectedFiles?: FileList;
  currentFileUpload?: File;
  fileslist:any[];
  percentage :number;
  blogPost: BlogPostModel;
  categorys:CategoryModel[]=[];
  imageUrl: String;
  selectedValue:any;
  postStatus:PostStatusEnum;
  loading: boolean = false;
  postForm: FormGroup;
  content:any;
  public config = {
    toolbar: [ 'heading', '|',
      'fontfamily','fontsize',
      'alignment',
      'fontColor','fontBackgroundColor', '|',
      'bold', 'italic', 'custombutton', 'strikethrough','underline','subscript','superscript','|',
      'link','|',
      'outdent','indent','|',
      'bulletedList','numberedList','|',
      'code','codeBlock','|',
      'insertTable','|',
      'imageUpload','blockQuote','|',
      'undo','redo','|',
      'youtube',
      'mediaEmbed'
    ]
  }

  constructor(private fileUploadService : FileuploadService, private blogService: BlogService, private category_serv: CategoryService,private formBuilder: FormBuilder) { 
    this.postForm=formBuilder.group({
      title:['',Validators.required],
      subTitle:['',Validators.required],
      featuredImage:['',Validators.required],
      category:['',Validators.required],
      content:['',Validators.required],
      status:['',Validators.required]
    })
  }

  ngOnInit(): void {
    
   
   this.category_serv.getCategorys().subscribe((body)=>{
    this.categorys=body['body'];
  })
  }
  selectedThumbnail(event) {
    this.selectedFiles = event.target.files;
    this.fileslist=event.target.files;
    this.currentFileUpload=this.selectedFiles[0];
    console.log(this.fileslist[0].file.name);
    
  }

  uploadImage(event) {
    this.loading = !this.loading;
    this.fileUploadService.uploadImage(this.currentFileUpload).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentage = Math.round((event.loaded / event.total) * 100);
          this.loading = false;
        } else if (event.type === HttpEventType.Response) {
           this.imageUrl = event.body.imageUrl;
          console.log(event);
          
          // Save the imageUrl to the BlogPost model or perform any other necessary operations
          // ...
        }
      },
      error => {
        console.log('Error uploading image:', error);
      }
    );
  }
  

  savePost(data: any) {

    data.slug = generateTitleSlug(data.title);
    data.featuredImage=this.imageUrl;
    data.date=formatDate(new Date(), 'yyyy/MM/dd', 'en').toString();
    data.author = {
      name: "softwaretechit",
      email: "demo@webkit.com",
      avatar: "public/assets/profiles/profile.png",
    }
    let blogPost: BlogPostModel = data;
    let res=this.blogService.createPost(blogPost);
    this.postForm=null;
    
    
  }
  selectedCategory(event){

    this.selectedValue= event.value;
    console.log(this.selectedValue);
    
  }
  selectedStatus(status){
    this.postStatus=status.value;
  }
  public fileDropped(event){
    this.blogPost.images.push(event);
  }
  
}
