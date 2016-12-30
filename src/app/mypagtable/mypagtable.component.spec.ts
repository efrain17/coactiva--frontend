/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MypagtableComponent } from './mypagtable.component';

describe('MypagtableComponent', () => {
  let component: MypagtableComponent;
  let fixture: ComponentFixture<MypagtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypagtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypagtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
