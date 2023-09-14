import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { NewTestComponent } from './new-test/new-test.component';
import { TestComponent } from './test.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    NewTestComponent,
    TestComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
