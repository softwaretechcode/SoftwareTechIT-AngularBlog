import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyckeditorFullFeaturedComponent } from './myckeditor-full-featured.component';

describe('MyckeditorFullFeaturedComponent', () => {
  let component: MyckeditorFullFeaturedComponent;
  let fixture: ComponentFixture<MyckeditorFullFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [MyckeditorFullFeaturedComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(MyckeditorFullFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
