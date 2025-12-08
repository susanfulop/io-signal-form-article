import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HibridForm } from './hibrid-form';

describe('HibridForm', () => {
  let component: HibridForm;
  let fixture: ComponentFixture<HibridForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HibridForm]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HibridForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
