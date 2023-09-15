import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PageInfo } from 'src/models/PageInfo';
import { TestType } from 'src/models/TestType';
import { EmptyPipe } from '../../../shared/directives/empty.pipe';
import { UpperCasePipe, JsonPipe } from '@angular/common';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
    standalone: true,
    imports: [UpperCasePipe, JsonPipe, EmptyPipe]
})
export class WelcomeComponent {
  @Input({required: true}) pageInfo!: PageInfo;
  @Input() username!: string;
  @Output() welcomeOutput = new EventEmitter<string>()

  handleClick() {
    this.welcomeOutput.emit(`WELCOME ${this.username.toUpperCase()}`)
  }

  
}
