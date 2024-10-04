import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slider3dComponent } from './slider3d.component';

describe('Slider3dComponent', () => {
  let component: Slider3dComponent;
  let fixture: ComponentFixture<Slider3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slider3dComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slider3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
