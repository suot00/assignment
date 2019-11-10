import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactasmComponent } from './contactasm.component';

describe('ContactasmComponent', () => {
  let component: ContactasmComponent;
  let fixture: ComponentFixture<ContactasmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactasmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactasmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
