import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationTableComponent } from './affectation-table.component';

describe('AffectationTableComponent', () => {
  let component: AffectationTableComponent;
  let fixture: ComponentFixture<AffectationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
