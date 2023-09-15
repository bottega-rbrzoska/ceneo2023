import { ApplicationRef, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { ConfigService } from 'src/app/core/config.service';
import { CustomConfigService } from 'src/app/core/custom-config.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers:[{provide: ConfigService, useClass: CustomConfigService}]
})
export class ContactComponent {
  counter = 0;
  intervalHandler!: any;
  constructor(appRef: ApplicationRef, ngZone: NgZone,private cdr: ChangeDetectorRef ) {
    
    ngZone.runOutsideAngular(() =>{
      this.intervalHandler = setInterval(() => {
        this.counter++
        console.log(this.counter)
        // this.cdr.detectChanges();
      },1000);
    })

  }

  ngOnDestroy() {
    clearInterval(this.intervalHandler)
  }
}
