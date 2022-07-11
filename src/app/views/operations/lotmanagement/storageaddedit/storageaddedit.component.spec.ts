import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageaddeditComponent } from './storageaddedit.component';

describe('StorageaddeditComponent', () => {
  let component: StorageaddeditComponent;
  let fixture: ComponentFixture<StorageaddeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageaddeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageaddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
