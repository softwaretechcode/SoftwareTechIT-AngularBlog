import { SafeUrl } from "@angular/platform-browser";

export interface FileHandler {
  key ?: String,
  name? : String,
  file: File,
  url: SafeUrl,
  

}
export class FileUploadModel {
  _id?: string;
  name: string;
  url: SafeUrl;
  file: File;

  constructor(file: File) {
    this.file = file;
  }
}