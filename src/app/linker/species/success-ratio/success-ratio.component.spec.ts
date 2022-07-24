import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessRatioComponent } from './success-ratio.component';

describe('SuccessRatioComponent', () => {
  let component: SuccessRatioComponent;
  let fixture: ComponentFixture<SuccessRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessRatioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
