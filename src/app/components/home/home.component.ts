import { Component, OnInit } from '@angular/core';
import { ServiceSectionComponent } from '../service-section/service-section.component';
import { PostlistComponent } from '../postlist/postlist.component';
import { MenuCardComponent } from '../menu-card/menu-card.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [MenuCardComponent, PostlistComponent, ServiceSectionComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
