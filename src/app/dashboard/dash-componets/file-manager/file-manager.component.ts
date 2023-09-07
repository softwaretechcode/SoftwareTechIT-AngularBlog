import { Component, OnInit } from '@angular/core';
import { FileUploadModel } from '../../dash-models/file-handle.model';
import { map } from 'rxjs/operators';
import { FileuploadService } from '../../dash-services/fileupload.service';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {
  filesList : FileUploadModel [];
  constructor(private uploadService: FileuploadService ) { }

  ngOnInit(): void {
    
  
  }
  getFiles(): void{
    
  }

}
