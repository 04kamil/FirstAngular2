/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WWWComponent } from './www.component';

describe('WWWComponent', () => {
  let component: WWWComponent;
  let fixture: ComponentFixture<WWWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WWWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WWWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
