import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDashListComponent } from './post-dash-list.component';

describe('PostDashListComponent', () => {
  let component: PostDashListComponent;
  let fixture: ComponentFixture<PostDashListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PostDashListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDashListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
