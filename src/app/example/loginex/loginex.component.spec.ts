import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginexComponent } from './loginex.component';

describe('LoginexComponent', () => {
  let component: LoginexComponent;
  let fixture: ComponentFixture<LoginexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [LoginexComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(LoginexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
