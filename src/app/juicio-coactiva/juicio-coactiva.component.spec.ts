/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JuicioCoactivaComponent } from './juicio-coactiva.component';

describe('JuicioCoactivaComponent', () => {
  let component: JuicioCoactivaComponent;
  let fixture: ComponentFixture<JuicioCoactivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuicioCoactivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuicioCoactivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
