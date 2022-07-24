import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddspeciesComponent } from './addspecies.component';

describe('AddspeciesComponent', () => {
  let component: AddspeciesComponent;
  let fixture: ComponentFixture<AddspeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddspeciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
