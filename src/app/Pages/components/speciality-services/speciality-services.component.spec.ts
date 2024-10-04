import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityServicesComponent } from './speciality-services.component';

describe('SpecialityServicesComponent', () => {
  let component: SpecialityServicesComponent;
  let fixture: ComponentFixture<SpecialityServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialityServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialityServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
