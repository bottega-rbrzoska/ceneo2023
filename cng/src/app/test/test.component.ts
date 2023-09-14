import { Component, Inject, ViewChild } from '@angular/core';
import { User } from 'src/models/User';
import { MULTI_CONFIG } from '../tokens/MULTI_CONFIG';
import { TestService } from './test.service';
import { Observable } from 'rxjs';
import { TestAttrDirective } from '../shared/test-attr.directive';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  @ViewChild(TestAttrDirective) attrDirectiveBox!: TestAttrDirective;
  testData$: Observable<{ testData: number } | null>
  constructor(@Inject(MULTI_CONFIG) private configs: string[], private _testService: TestService) {
    this.testData$ = this._testService.testData$;
    this._testService.fetchData();

  }
  show = false;
 boxColor="red" 
  collection: User[] = [
    { email: 'a@b.pl', name: 'Alojzy', isAdmin: false },
    { email: 'c@c.pl', name: 'Tomasz', isAdmin: false },
    { email: 'e@f.pl', name: 'Jarosław', isAdmin: true }
  ]
  toggle() {
    this.show = !this.show;
  }


  toggleBoxByDirective() {
    this.attrDirectiveBox.toggleClass()
  }
}
