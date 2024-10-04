import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopportingServicesOptionsComponent } from './sopporting-services-options.component';

describe('SopportingServicesOptionsComponent', () => {
  let component: SopportingServicesOptionsComponent;
  let fixture: ComponentFixture<SopportingServicesOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SopportingServicesOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SopportingServicesOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
