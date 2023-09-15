import { Component } from '@angular/core';
import { NotificationMessage } from 'src/models/NotificationMessage';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class NotificationComponent {
  msg!: NotificationMessage;
}
