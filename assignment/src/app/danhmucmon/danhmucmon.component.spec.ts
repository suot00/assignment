import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucmonComponent } from './danhmucmon.component';

describe('DanhmucmonComponent', () => {
  let component: DanhmucmonComponent;
  let fixture: ComponentFixture<DanhmucmonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhmucmonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
