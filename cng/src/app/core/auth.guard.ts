import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  return authService.isLoggedIn$;
};

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService){  
  }
  canActivate(): Observable<boolean> {
    return this.authService.isLoggedIn$;
  }

}