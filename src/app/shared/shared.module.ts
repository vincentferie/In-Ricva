import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../translate-service/translate.pipe';

@NgModule({
  declarations: [
    ButtonComponent,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ButtonComponent,
    TranslatePipe
  ]
})
export class SharedModule { }
