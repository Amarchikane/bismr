import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeautesComponent } from './feautes.component';

describe('FeautesComponent', () => {
  let component: FeautesComponent;
  let fixture: ComponentFixture<FeautesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeautesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeautesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
