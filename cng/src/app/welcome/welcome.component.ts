import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PageInfo } from 'src/models/PageInfo';
import { TestType } from 'src/models/TestType';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  @Input() pageInfo!: PageInfo;
  @Input() username!: string;
  @Output() welcomeOutput = new EventEmitter<string>()

  handleClick(ev: Event) {
    console.log(ev)
  }
}
