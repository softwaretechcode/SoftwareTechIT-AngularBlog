import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGearComponent } from './my-gear.component';

describe('MyGearComponent', () => {
  let component: MyGearComponent;
  let fixture: ComponentFixture<MyGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
