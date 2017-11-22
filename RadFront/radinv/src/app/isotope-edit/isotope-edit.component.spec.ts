import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsotopeEditComponent } from './isotope-edit.component';

describe('IsotopeEditComponent', () => {
  let component: IsotopeEditComponent;
  let fixture: ComponentFixture<IsotopeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsotopeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsotopeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
