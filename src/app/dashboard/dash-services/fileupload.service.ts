import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileHandler, FileUploadModel } from '../dash-models/file-handle.model';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  apiUrl=environment.apiUrl;
  constructor(private http_upload: HttpClient) { }
  
  uploadImage(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', file,file.name);
    
    return this.http_upload.post( this.apiUrl+'upload', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
