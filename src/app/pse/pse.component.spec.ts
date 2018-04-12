/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PseComponent } from './pse.component';

describe('PseComponent', () => {
  let component: PseComponent;
  let fixture: ComponentFixture<PseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
