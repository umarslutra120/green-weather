import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseriesComponent } from './nurseries.component';

describe('NurseriesComponent', () => {
  let component: NurseriesComponent;
  let fixture: ComponentFixture<NurseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
