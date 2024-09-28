import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseUSComponent } from './choose-us.component';

describe('ChooseUSComponent', () => {
  let component: ChooseUSComponent;
  let fixture: ComponentFixture<ChooseUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseUSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
