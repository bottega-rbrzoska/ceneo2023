import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VatPipe } from './vat.pipe';
import { EmptyPipe } from './empty.pipe';



@NgModule({
  declarations: [VatPipe, EmptyPipe],
  imports: [
    CommonModule
  ],
  exports: [VatPipe, EmptyPipe]
})
export class SharedModule { }
