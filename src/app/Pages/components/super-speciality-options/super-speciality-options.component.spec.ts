import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSpecialityOptionsComponent } from './super-speciality-options.component';

describe('SuperSpecialityOptionsComponent', () => {
  let component: SuperSpecialityOptionsComponent;
  let fixture: ComponentFixture<SuperSpecialityOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperSpecialityOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperSpecialityOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
