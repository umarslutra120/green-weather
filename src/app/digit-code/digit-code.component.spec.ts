import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitCodeComponent } from './digit-code.component';

describe('DigitCodeComponent', () => {
  let component: DigitCodeComponent;
  let fixture: ComponentFixture<DigitCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
