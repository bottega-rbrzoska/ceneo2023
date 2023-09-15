import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private _testDataSubj = new BehaviorSubject<{ testData: number } | null>(
    null
  );
  testData$ = this._testDataSubj.asObservable();

  constructor(private http: HttpClient) {}

  fetchData() {
    this.http
      .get<{ testData: number }>('http://localhost:3000/test')
      .subscribe((v) => {
        this._testDataSubj.next(v);
      });
  }
}
