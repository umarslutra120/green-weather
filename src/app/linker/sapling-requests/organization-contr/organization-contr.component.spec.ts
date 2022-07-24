import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationContrComponent } from './organization-contr.component';

describe('OrganizationContrComponent', () => {
  let component: OrganizationContrComponent;
  let fixture: ComponentFixture<OrganizationContrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationContrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationContrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
