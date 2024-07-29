import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-service-section',
    templateUrl: './service-section.component.html',
    styleUrls: ['./service-section.component.css'],
    standalone: true,
    imports: [RouterLink]
})
export class ServiceSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
