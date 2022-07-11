import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillofladingComponent } from './billoflading.component';

describe('BillofladingComponent', () => {
  let component: BillofladingComponent;
  let fixture: ComponentFixture<BillofladingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillofladingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillofladingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
