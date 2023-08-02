import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationStudentComponent } from './evaluation-student.component';

describe('EvaluationStudentComponent', () => {
  let component: EvaluationStudentComponent;
  let fixture: ComponentFixture<EvaluationStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
