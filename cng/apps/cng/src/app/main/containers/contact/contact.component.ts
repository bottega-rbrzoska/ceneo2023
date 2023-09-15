import { Component } from '@angular/core';
import { ConfigService } from 'src/app/core/config.service';
import { CustomConfigService } from 'src/app/core/custom-config.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [{ provide: ConfigService, useClass: CustomConfigService }],
})
export class ContactComponent {
  constructor(configService: ConfigService) {}
}
