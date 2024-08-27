import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletComponent } from './selet.component';

describe('SeletComponent', () => {
  let component: SeletComponent;
  let fixture: ComponentFixture<SeletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeletComponent]
    });
    fixture = TestBed.createComponent(SeletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
