import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPostlistComponent } from './menu-postlist.component';

describe('MenuPostlistComponent', () => {
  let component: MenuPostlistComponent;
  let fixture: ComponentFixture<MenuPostlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MenuPostlistComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(MenuPostlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
