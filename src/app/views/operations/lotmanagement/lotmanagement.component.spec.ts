import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotmanagementComponent } from './lotmanagement.component';

describe('LotmanagementComponent', () => {
  let component: LotmanagementComponent;
  let fixture: ComponentFixture<LotmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
