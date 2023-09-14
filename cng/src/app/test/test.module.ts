import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { NewTestComponent } from './new-test/new-test.component';
import { TestComponent } from './test.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NewTestComponent,
    TestComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TestRoutingModule
  ]
})
export class TestModule { }
