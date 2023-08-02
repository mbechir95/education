import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationTabTeacherComponent } from './evaluation-tab-teacher.component';

describe('EvaluationTabTeacherComponent', () => {
  let component: EvaluationTabTeacherComponent;
  let fixture: ComponentFixture<EvaluationTabTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationTabTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationTabTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
