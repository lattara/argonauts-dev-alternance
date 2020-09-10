import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgonautsComponent } from './argonauts.component';

describe('ArgonautsComponent', () => {
  let component: ArgonautsComponent;
  let fixture: ComponentFixture<ArgonautsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArgonautsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgonautsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
