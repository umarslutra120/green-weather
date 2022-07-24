import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaplingRequestsComponent } from './sapling-requests.component';

describe('SaplingRequestsComponent', () => {
  let component: SaplingRequestsComponent;
  let fixture: ComponentFixture<SaplingRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaplingRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaplingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
