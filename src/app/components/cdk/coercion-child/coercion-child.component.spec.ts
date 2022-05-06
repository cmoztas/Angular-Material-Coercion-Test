import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoercionChildComponent } from './coercion-child.component';

describe('CoercionChildComponent', () => {
  let component: CoercionChildComponent;
  let fixture: ComponentFixture<CoercionChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoercionChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoercionChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
