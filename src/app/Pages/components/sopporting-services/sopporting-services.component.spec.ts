import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopportingServicesComponent } from './sopporting-services.component';

describe('SopportingServicesComponent', () => {
  let component: SopportingServicesComponent;
  let fixture: ComponentFixture<SopportingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SopportingServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SopportingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
