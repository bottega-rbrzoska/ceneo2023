import { Component, ComponentFactory, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.scss']
})
export class NotificationContainerComponent {
 @ViewChild('notificationContainer', { read: ViewContainerRef, static: false }) vcr!: ViewContainerRef;

 constructor(private _notificationsService: NotificationsService) {
 }

 ngAfterViewInit() {
  this._notificationsService.notifications$.subscribe((msg)=> {
    const componentRef = this.vcr.createComponent(NotificationComponent);
    componentRef.instance.msg = msg;
    setTimeout(() => {
      componentRef.destroy()
    }, 3000)
  })
  
 }
}
