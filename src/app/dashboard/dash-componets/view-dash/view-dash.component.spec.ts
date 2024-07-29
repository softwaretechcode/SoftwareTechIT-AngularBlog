import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDashComponent } from './view-dash.component';

describe('ViewDashComponent', () => {
  let component: ViewDashComponent;
  let fixture: ComponentFixture<ViewDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ViewDashComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ViewDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
