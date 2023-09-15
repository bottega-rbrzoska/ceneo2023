import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { AsyncPipe } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { PermissionsDirective } from '../../shared/directives/permissions.directive';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    standalone: true,
    imports: [RouterLink, PermissionsDirective, LoginComponent, AsyncPipe]
})
export class NavigationComponent {

  isLoggedIn$: Observable<boolean>;
  constructor(private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  handleAuth(auth: boolean) {
    if (auth) {
      this.authService.logIn()
    } else {
      this.authService.logOut()
    }
  }
}
