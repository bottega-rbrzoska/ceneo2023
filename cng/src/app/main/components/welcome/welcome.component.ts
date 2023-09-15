import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PageInfo } from 'src/models/PageInfo';
import { TestType } from 'src/models/TestType';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  @Input({required: true}) pageInfo!: PageInfo;
  @Input() username!: string;
  @Output() welcomeOutput = new EventEmitter<string>()

  handleClick() {
    this.welcomeOutput.emit(`WELCOME ${this.username.toUpperCase()}`)
  }

  
}
