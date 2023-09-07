import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashViewComponent } from './admin-dash-view.component';

describe('AdminDashViewComponent', () => {
  let component: AdminDashViewComponent;
  let fixture: ComponentFixture<AdminDashViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
