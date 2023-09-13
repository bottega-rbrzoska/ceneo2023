import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { TestType } from 'src/models/TestType';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  @Input() myInputData!: TestType;
  @Output() welcomeOutput = new EventEmitter<string>()

  handleClick(ev: Event) {
    console.log(ev)
  }
}
