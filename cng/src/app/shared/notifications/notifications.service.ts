import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationMessage } from 'src/models/NotificationMessage';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private _notificationsSubj = new Subject<NotificationMessage>()
  notifications$ = this._notificationsSubj.asObservable();
  
  pushNotification(msg: NotificationMessage) {
    this._notificationsSubj.next(msg)
  }
}
