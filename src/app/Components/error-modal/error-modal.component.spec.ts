import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorModalComponent } from './error-modal.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

describe('ErrorModalComponent', () => {
  let component: ErrorModalComponent;
  let fixture: ComponentFixture<ErrorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: MatDialogRef, useValue: {}},
        { provide: MAT_DIALOG_DATA, useValue: {
          error: {
            status: 101,
            statusText: 'Not Authorized',
            message: 'Invalid Barrier'
          }
        }},
      ],
      declarations: [ ErrorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
