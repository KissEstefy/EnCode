import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLogueoComponent } from './navbar-logueo.component';

describe('NavbarLogueoComponent', () => {
  let component: NavbarLogueoComponent;
  let fixture: ComponentFixture<NavbarLogueoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarLogueoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLogueoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
