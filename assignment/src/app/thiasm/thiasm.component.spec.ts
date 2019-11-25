import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiasmComponent } from './thiasm.component';

describe('ThiasmComponent', () => {
  let component: ThiasmComponent;
  let fixture: ComponentFixture<ThiasmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThiasmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiasmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
