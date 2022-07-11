import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnloadsComponent } from './unloads.component';

describe('UnloadsComponent', () => {
  let component: UnloadsComponent;
  let fixture: ComponentFixture<UnloadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnloadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
