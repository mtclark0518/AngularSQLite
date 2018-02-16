import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShitListComponent } from './shit-list.component';

describe('ShitListComponent', () => {
  let component: ShitListComponent;
  let fixture: ComponentFixture<ShitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
