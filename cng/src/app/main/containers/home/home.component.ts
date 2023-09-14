import { Component, ViewEncapsulation } from '@angular/core';
import { PageInfo } from 'src/models/PageInfo';
import { TestType } from 'src/models/TestType';
import { User } from 'src/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  today = new Date();

  pageInfoData: PageInfo = {
    description: 'description123',
    title: 'Page info title123'
  }
  user: User ={
    email: 'asd@asd.pl',
    isAdmin: true,
    name: 'Tester'
  }
  myData: TestType = {
    name: 'test',
    num: 10
  }

  handleWelcome(msg: string) {
    console.log(msg)
  }
}
