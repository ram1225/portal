import { A11yModule } from "@angular/cdk/a11y";
import { NgModule } from "@angular/core";
import {
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatRadioModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSnackBarModule,MatBadgeModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatRippleModule,
  MatButtonModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule,
  MatGridListModule
} from "@angular/material";
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  exports: [
    A11yModule,
    MatCardModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatRippleModule,
    MatListModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatGridListModule,
    ScrollingModule
  ]
})
export class MaterialModule {}
