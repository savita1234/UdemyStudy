import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Case1 } from './case1';

describe('Case1', () => {
  let component: Case1;
  let fixture: ComponentFixture<Case1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Case1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Case1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
