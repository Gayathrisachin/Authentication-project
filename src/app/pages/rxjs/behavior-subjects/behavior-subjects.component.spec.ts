import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubjectsComponent } from './behavior-subjects.component';

describe('BehaviorSubjectsComponent', () => {
  let component: BehaviorSubjectsComponent;
  let fixture: ComponentFixture<BehaviorSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviorSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
