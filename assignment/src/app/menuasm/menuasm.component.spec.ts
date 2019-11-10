import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuasmComponent } from './menuasm.component';

describe('MenuasmComponent', () => {
  let component: MenuasmComponent;
  let fixture: ComponentFixture<MenuasmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuasmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuasmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
