import { ApplicationRef, Component, EventEmitter, Input, NgZone, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() isLoggedIn = false;
  @Output() auth = new EventEmitter();
  counter = 0;

  constructor(appRef: ApplicationRef, ngZone: NgZone, ) {
    
    ngZone.runOutsideAngular(() =>{
      setInterval(() => {
        this.counter++
      },1000)
    })

  }
}
