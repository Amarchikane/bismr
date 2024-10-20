import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariousGovernmentSchemesComponent } from './various-government-schemes.component';

describe('VariousGovernmentSchemesComponent', () => {
  let component: VariousGovernmentSchemesComponent;
  let fixture: ComponentFixture<VariousGovernmentSchemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariousGovernmentSchemesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariousGovernmentSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
