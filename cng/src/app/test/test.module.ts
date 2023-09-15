import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { NewTestComponent } from './new-test/new-test.component';
import { TestComponent } from './test.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TestRoutingModule,
        NewTestComponent,
        TestComponent,
        RxjsComponent
    ]
})
export class TestModule { }
