import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShitDataComponent } from './shit-data.component';

describe('ShitDataComponent', () => {
  let component: ShitDataComponent;
  let fixture: ComponentFixture<ShitDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShitDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShitDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
