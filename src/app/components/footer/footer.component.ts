import { DatePipe, formatDate, getLocaleDateFormat, getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: true,
    imports: [RouterLink]
})
export class FooterComponent implements OnInit {
  date:any;

  constructor() {            
    this.date=(new Date()).getFullYear()
  }

  ngOnInit(): void {
  }

}
