import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeServiceComponent } from './youtube-service.component';

describe('YoutubeServiceComponent', () => {
  let component: YoutubeServiceComponent;
  let fixture: ComponentFixture<YoutubeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
