import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSignalForm } from './simple-signal-form';

describe('SimpleSignalForm', () => {
  let component: SimpleSignalForm;
  let fixture: ComponentFixture<SimpleSignalForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleSignalForm]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SimpleSignalForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
