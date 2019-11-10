import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesasmComponent } from './servicesasm.component';

describe('ServicesasmComponent', () => {
  let component: ServicesasmComponent;
  let fixture: ComponentFixture<ServicesasmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesasmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesasmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
