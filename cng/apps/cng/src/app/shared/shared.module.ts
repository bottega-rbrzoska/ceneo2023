import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VatPipe } from './vat.pipe';
import { EmptyPipe } from './empty.pipe';
import { TestAttrDirective } from './test-attr.directive';
import { TestStrDirective } from './test-str.directive';
import { PermissionsDirective } from './permissions.directive';

@NgModule({
  declarations: [
    VatPipe,
    EmptyPipe,
    TestAttrDirective,
    TestStrDirective,
    PermissionsDirective,
  ],
  imports: [CommonModule],
  exports: [
    VatPipe,
    EmptyPipe,
    TestAttrDirective,
    TestStrDirective,
    PermissionsDirective,
  ],
})
export class SharedModule {}
