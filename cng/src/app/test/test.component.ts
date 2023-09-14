import { Component, Inject } from '@angular/core';
import { User } from 'src/models/User';
import { MULTI_CONFIG } from '../tokens/MULTI_CONFIG';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  constructor(@Inject(MULTI_CONFIG) private configs: string[]) {
    console.log(configs)

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
}
