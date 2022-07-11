import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnloadsaddeditComponent } from './unloadsaddedit.component';

describe('UnloadsaddeditComponent', () => {
  let component: UnloadsaddeditComponent;
  let fixture: ComponentFixture<UnloadsaddeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnloadsaddeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnloadsaddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
