import { Component } from '@angular/core';
import { NotificationMessage } from 'src/models/NotificationMessage';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  msg!: NotificationMessage;
}
