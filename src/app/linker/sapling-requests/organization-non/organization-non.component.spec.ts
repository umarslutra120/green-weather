import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationNonComponent } from './organization-non.component';

describe('OrganizationNonComponent', () => {
  let component: OrganizationNonComponent;
  let fixture: ComponentFixture<OrganizationNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationNonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
