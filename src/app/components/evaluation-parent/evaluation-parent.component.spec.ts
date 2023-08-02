import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationParentComponent } from './evaluation-parent.component';

describe('EvaluationParentComponent', () => {
  let component: EvaluationParentComponent;
  let fixture: ComponentFixture<EvaluationParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
