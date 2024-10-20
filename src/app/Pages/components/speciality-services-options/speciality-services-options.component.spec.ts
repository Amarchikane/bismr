import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityServicesOptionsComponent } from './speciality-services-options.component';

describe('SpecialityServicesOptionsComponent', () => {
  let component: SpecialityServicesOptionsComponent;
  let fixture: ComponentFixture<SpecialityServicesOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialityServicesOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialityServicesOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
