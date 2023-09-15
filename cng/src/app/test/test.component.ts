import { Component, Inject, ViewChild } from '@angular/core';
import { User } from 'src/models/User';
import { MULTI_CONFIG } from '../tokens/MULTI_CONFIG';
import { TestService } from './test.service';
import { Observable } from 'rxjs';
import { TestAttrDirective } from '../shared/directives/test-attr.directive';
import { NotificationsService } from '../shared/notifications/notifications.service';
import { TestStrDirective } from '../shared/directives/test-str.directive';
import { NewTestComponent } from './new-test/new-test.component';
import { NgIf, NgFor, NgClass, AsyncPipe, JsonPipe } from '@angular/common';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
    standalone: true,
    imports: [TestAttrDirective, NgIf, NewTestComponent, NgFor, NgClass, TestStrDirective, AsyncPipe, JsonPipe]
})
export class TestComponent {
  @ViewChild(TestAttrDirective) attrDirectiveBox!: TestAttrDirective;
  testData$: Observable<{ testData: number } | null>
  constructor(@Inject(MULTI_CONFIG) private configs: string[], private _testService: TestService, notificationsService: NotificationsService) {
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
