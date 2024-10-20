import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemesSectionComponent } from './schemes-section.component';

describe('SchemesSectionComponent', () => {
  let component: SchemesSectionComponent;
  let fixture: ComponentFixture<SchemesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchemesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
