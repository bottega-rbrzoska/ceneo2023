import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subject, concatMap, debounceTime, distinctUntilChanged, exhaustMap, filter, fromEvent, map, mergeMap, of, pairwise, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent {
  // myPromise = new Promise((resolve, reject) => {
  //   setTimeout(() => reject('promise error'), 1000)
  //   setTimeout(() => resolve('promise done'), 2000)
  // })

  @ViewChild('myInput', { static: true }) input!: ElementRef<HTMLInputElement>;
  constructor(private http: HttpClient) {

  }
  myObs$ = new Observable((obs) => {
    obs.complete()
    obs.error('123')
    obs.next(2)
  });
  private mySubject = new Subject();
  private myBSubject = new BehaviorSubject('b1')
  myB$ = this.myBSubject.asObservable();

  myObs2$ = of(1, 2, 3, 4, 5, 5, 5, 6, 5)

  ngOnInit() {
    // this.myPromise.then(v => console.log(v)).catch(e => console.error('Error in promise:', e))
    // this.myObs$.subscribe((v) => console.log(v))
    // this.myObs2$.pipe(
    //   filter(v => v > 3),
    //   map(v => v * 2), 
    //   distinctUntilChanged(),
    //   pairwise()
    // ).subscribe((v) => console.log(v));
    // this.mySubject.next('a1');
    // this.mySubject.subscribe(v => console.log(v))
    
    // this.mySubject.next('a2');
    // this.myB$.subscribe(v => console.log(v))

    fromEvent(this.input.nativeElement, 'input').pipe(
      map((v: any) => v.target.value),
      //debounceTime(400),
      mergeMap(v => this.http.get<any>('http://localhost:3000/test')),
      // concatMap(v => this.http.get<any>('http://localhost:3000/test')),
      // exhaustMap(v => this.http.get<any>('http://localhost:3000/test')),
      // switchMap(v => this.http.get<any>('http://localhost:3000/test'))
    ).subscribe(v => console.log(v))
  }
}
