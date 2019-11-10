import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherasmComponent } from './teacherasm.component';

describe('TeacherasmComponent', () => {
  let component: TeacherasmComponent;
  let fixture: ComponentFixture<TeacherasmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherasmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherasmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
