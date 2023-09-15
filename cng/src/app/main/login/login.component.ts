import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class LoginComponent {
  @Input() isLoggedIn = false;
  @Output() auth = new EventEmitter();
}
