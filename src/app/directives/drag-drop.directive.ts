import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
import {FileUploadModel } from '../dashboard/dash-models/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';


@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {
 
  @Output()  files: EventEmitter<FileUploadModel>= new EventEmitter();

  @HostBinding("style.background") private background = "#eee";

  constructor(private sanitizer: DomSanitizer) { }
 
  @HostListener("dragover", ["$event"])
  public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#999";
  }
  
  @HostListener("dragleave", ["$event"])
  public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#eee";
  }

  @HostListener("drop", ["$event"])
  public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#eee";
    let fileHandle: FileUploadModel = null;
    const file = evt.dataTransfer.files[0];
    let name=evt.dataTransfer.files[0].name;
    const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
    fileHandle = { file, url,name};
    this.files.emit(fileHandle);
  }
}
