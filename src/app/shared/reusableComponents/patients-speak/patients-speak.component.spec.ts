import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsSpeakComponent } from './patients-speak.component';

describe('PatientsSpeakComponent', () => {
  let component: PatientsSpeakComponent;
  let fixture: ComponentFixture<PatientsSpeakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientsSpeakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientsSpeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
