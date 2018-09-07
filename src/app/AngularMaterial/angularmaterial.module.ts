import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatInputModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatChipsModule,
  MatSnackBarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
    MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatChipsModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
      MatDialogModule
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatChipsModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
      MatDialogModule
  ]
})
export class AngularMaterialModule {}
