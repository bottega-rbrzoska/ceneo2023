import { Component, ViewEncapsulation } from '@angular/core';
import { TestType } from 'src/models/TestType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  myData: TestType = {
    name: 'test',
    num: 10
  }
}
