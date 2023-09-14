import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubj = new BehaviorSubject<boolean>(false);
  private _token: string | null = null;
  get token() {
    return this._token;
  }
  isLoggedIn$ = this.isLoggedInSubj.asObservable();
  
  logIn() {
    this._token = 'asdfknwjehgb87fy8439htnby4tvyin';
    this.isLoggedInSubj.next(true);
  }
  logOut() {
    this._token = null;
    this.isLoggedInSubj.next(false);
  }

  

}
