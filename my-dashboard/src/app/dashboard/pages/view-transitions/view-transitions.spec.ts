import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransitions } from './view-transitions';

describe('ViewTransitions', () => {
  let component: ViewTransitions;
  let fixture: ComponentFixture<ViewTransitions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransitions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTransitions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
