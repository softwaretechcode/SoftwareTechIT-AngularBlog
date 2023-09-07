import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAdsComponent } from './custom-ads.component';

describe('CustomAdsComponent', () => {
  let component: CustomAdsComponent;
  let fixture: ComponentFixture<CustomAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
