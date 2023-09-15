import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let cloneReq;
    if (this._authService.token) {
      cloneReq = request.clone({
        headers: request.headers.set(
          'Authorization',
          'Bearer ' + this._authService.token
        ),
      });
    }
    return next.handle(cloneReq || request);
  }
}
