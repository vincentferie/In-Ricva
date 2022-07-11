import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PottingplanComponent } from './pottingplan.component';

describe('PottingplanComponent', () => {
  let component: PottingplanComponent;
  let fixture: ComponentFixture<PottingplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PottingplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PottingplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
