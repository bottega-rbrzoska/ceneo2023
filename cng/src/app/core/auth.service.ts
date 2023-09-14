import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubj = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubj.asObservable();
  
  logIn() {
    this.isLoggedInSubj.next(true);
  }
  logOut() {
    this.isLoggedInSubj.next(false);
  }

}
