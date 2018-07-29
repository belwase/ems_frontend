import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRoutinComponent } from './class-routin.component';

describe('ClassRoutinComponent', () => {
  let component: ClassRoutinComponent;
  let fixture: ComponentFixture<ClassRoutinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassRoutinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassRoutinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
