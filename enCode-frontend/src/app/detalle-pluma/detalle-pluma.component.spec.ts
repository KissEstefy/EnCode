import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePlumaComponent } from './detalle-pluma.component';

describe('DetallePlumaComponent', () => {
  let component: DetallePlumaComponent;
  let fixture: ComponentFixture<DetallePlumaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePlumaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePlumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
