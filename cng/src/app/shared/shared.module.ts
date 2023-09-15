import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VatPipe } from './directives/vat.pipe';
import { EmptyPipe } from './directives/empty.pipe';
import { PermissionsDirective } from './directives/permissions.directive';
import { TestAttrDirective } from './directives/test-attr.directive';
import { TestStrDirective } from './directives/test-str.directive';
import { NotificationComponent } from './notifications/notification/notification.component';
import { NotificationContainerComponent } from './notifications/notification-container/notification-container.component';
import { NotificationsService } from './notifications/notifications.service';




@NgModule({
  declarations: [VatPipe, EmptyPipe, 
    TestAttrDirective, TestStrDirective, PermissionsDirective, 
    NotificationComponent, NotificationContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [VatPipe, EmptyPipe, TestAttrDirective, TestStrDirective, PermissionsDirective, NotificationContainerComponent]
})
export class SharedModule { 
  // static forRoot(): ModuleWithProviders<SharedModule> {
  //   return {
  //     ngModule: SharedModule,
  //     providers: [NotificationsService]
  //   }
  // }
}
