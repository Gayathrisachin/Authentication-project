import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveOverviewComponent } from './directive-overview.component';

describe('DirectiveOverviewComponent', () => {
  let component: DirectiveOverviewComponent;
  let fixture: ComponentFixture<DirectiveOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
