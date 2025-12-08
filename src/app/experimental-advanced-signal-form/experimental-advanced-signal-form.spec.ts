import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentalAdvancedSignalForm } from './experimental-advanced-signal-form';

describe('ExperimentalAdvancedSignalForm', () => {
  let component: ExperimentalAdvancedSignalForm;
  let fixture: ComponentFixture<ExperimentalAdvancedSignalForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperimentalAdvancedSignalForm]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExperimentalAdvancedSignalForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
