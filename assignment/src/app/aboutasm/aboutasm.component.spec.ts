import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutasmComponent } from './aboutasm.component';

describe('AboutasmComponent', () => {
  let component: AboutasmComponent;
  let fixture: ComponentFixture<AboutasmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutasmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutasmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
