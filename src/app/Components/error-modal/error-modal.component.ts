import {Component, Inject, OnInit} from '@angular/core';
import {LayoutComponent} from '../layout/layout.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LayoutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {error: HttpErrorResponse}) {}

  ngOnInit(): void {

  }

  onclick(): void {
    this.dialogRef.close(false);
  }
}
