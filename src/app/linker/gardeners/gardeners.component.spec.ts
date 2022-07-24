import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenersComponent } from './gardeners.component';

describe('GardenersComponent', () => {
  let component: GardenersComponent;
  let fixture: ComponentFixture<GardenersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
